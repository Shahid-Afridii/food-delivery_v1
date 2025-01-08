import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Environment variable for the API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set the Authorization header dynamically
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
