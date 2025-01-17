import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL
const API_URL = 'http://localhost:3000/meetings';

// Async thunk for fetching meetings
export const fetchMeetings = createAsyncThunk('meetings/fetchMeetings', async () => {
  const response = await axios.get(API_URL);
  return response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
});

// Async thunk for creating a new meeting
export const createMeeting = createAsyncThunk('meetings/createMeeting', async (newMeeting) => {
  const response = await axios.post(API_URL, { ...newMeeting, id: Date.now() });
  return response.data;
});

// Async thunk for updating a meeting
export const updateMeeting = createAsyncThunk('meetings/updateMeeting', async ({ id, updatedMeeting }) => {
  await axios.put(`${API_URL}/${id}`, updatedMeeting);
  return { id, updatedMeeting };
});

// Async thunk for deleting a meeting
export const deleteMeeting = createAsyncThunk('meetings/deleteMeeting', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Meetings slice
const meetingSlice = createSlice({
  name: 'meeting',
  initialState: {
    meetings: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMeetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.meetings = action.payload;
      })
      .addCase(fetchMeetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createMeeting.fulfilled, (state, action) => {
        state.meetings.unshift(action.payload);
      })
      .addCase(updateMeeting.fulfilled, (state, action) => {
        const { id, updatedMeeting } = action.payload;
        const existingMeeting = state.meetings.find((meeting) => meeting.id === id);
        if (existingMeeting) {
          Object.assign(existingMeeting, updatedMeeting);
        }
      })
      .addCase(deleteMeeting.fulfilled, (state, action) => {
        state.meetings = state.meetings.filter((meeting) => meeting.id !== action.payload);
      });
  },
});

export default meetingSlice.reducer;
