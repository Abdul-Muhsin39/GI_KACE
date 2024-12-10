import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Change this to your deployed backend URL later
});

// Add Authorization header for protected routes
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
