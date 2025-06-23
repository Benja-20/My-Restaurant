import axios from 'axios';
import { refreshToken } from './users/usersAPI';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshResponse = await refreshToken({
                    refresh: localStorage.getItem('refresh')
                });
                localStorage.setItem('access', refreshResponse.access);
                originalRequest.headers.Authorization = `Bearer ${refreshResponse.access}`;
                return api(originalRequest);
            } catch (refreshError) {
                console.error('Refresh token failed:', refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
)

export default api;
