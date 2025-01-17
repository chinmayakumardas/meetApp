// src/api/meetingsApi.js
import api from './axios';  // Import the Axios instance

// Async thunk to fetch meetings
export const fetchMeetings = async () => {
  try {
    const response = await api.get('/meetings');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Async thunk to add a new meeting
export const addMeeting = async (meetingData) => {
  try {
    const response = await api.post('/meetings', meetingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
