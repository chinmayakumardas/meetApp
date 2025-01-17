// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,  // Use environment variable for base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
