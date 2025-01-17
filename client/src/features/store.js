// src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import gridViewReducer from './gridViewSlice';
import noteReducer from './note/noteSlice';
import meetingReducer from './meeting/meetingSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    gridView: gridViewReducer,
    note: noteReducer,
    meeting: meetingReducer,
  },
});
