import api from '../api';
import axios from 'axios';

export async function loginUser(credentials) {
    const response = await api.post('/users/login/', credentials);
    return response.data;
}

export async function registerUser(credentials) {
    const response = await api.post('/users/register/', credentials);
    return response.data;
}

// export const registerUser = async (userData) => {
//     try {
//         const response = await axios.post('http://127.0.0.1:8000/users/register/', userData);
//         return response.data;
//     } catch (err) {
//         console.error('Registration error:', err.response?.data);
//         throw err.response?.data;
//     }
// };

export async function getUserProfile() {
    const response = await api.get('/users/me/');
    return response.data;
}


export async function refreshToken(payload) {
    const response = await api.post('/users/token/refresh/', payload);
    return response.data;
}

export async function logoutUser(refreshToken) {
    return api.post('/users/logout/', { refresh: refreshToken });
}