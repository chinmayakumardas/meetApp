// src/api/notesApi.js
import api from './axios';  // Import the Axios instance

// Async thunk to fetch notes
export const fetchNotes = async () => {
  try {
    const response = await api.get('/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Async thunk to add a new note
export const addNote = async (noteData) => {
  try {
    const response = await api.post('/notes', noteData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
