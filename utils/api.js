import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});