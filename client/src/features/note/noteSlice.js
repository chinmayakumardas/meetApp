import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base API URL
const API_URL = 'http://localhost:3000/notes';

// Async thunk for fetching notes
export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get(API_URL);
  return response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
});

// Async thunk for creating a new note
export const createNote = createAsyncThunk('notes/createNote', async (newNote) => {
  const response = await axios.post(API_URL, { ...newNote, id: Date.now() });
  return response.data;
});

// Async thunk for updating a note
export const updateNote = createAsyncThunk('notes/updateNote', async ({ id, updatedNote }) => {
  await axios.put(`${API_URL}/${id}`, updatedNote);
  return { id, updatedNote };
});

// Async thunk for deleting a note
export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Notes slice
const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.unshift(action.payload);
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        const { id, updatedNote } = action.payload;
        const existingNote = state.notes.find((note) => note.id === id);
        if (existingNote) {
          Object.assign(existingNote, updatedNote);
        }
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      });
  },
});

export default noteSlice.reducer;
