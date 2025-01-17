
// src/features/auth/authSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { email: 'admin@company.com', password: '123', role: 'admin', name: 'Admin User', token: 'adminToken123' },
    { email: 'daschinmaya260@gmail.com', password: '123', role: 'hr', name: 'HR User', token: 'hrToken123' },
    { email: 'cpc@company.com', password: '123', role: 'cpc', name: 'CPC User', token: 'cpcToken123' },
    { email: 'md@company.com', password: 'md123', role: 'md', name: 'MD User', token: 'mdToken123' },
    { email: 'chairman@company.com', password: 'chairman123', role: 'chairman', name: 'Chairman User', token: 'chairmanToken123' },
  ],
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      // Optionally store user info or token in localStorage or sessionStorage if needed
      // localStorage.setItem('authToken', action.payload.token);
    },
    logout: (state) => {
      state.currentUser = null;
      // Clear all session-related data
      localStorage.clear();  // Clears all items in localStorage
      sessionStorage.clear();  // Clears all items in sessionStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
