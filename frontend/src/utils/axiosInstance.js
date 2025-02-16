import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        }
        return response;
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            handleHttpError(status, data?.message || 'Request failed');
        } else if (error.request) {
            handleHttpError(null, 'Network error,check your internet connection.');
        } else {
            handleHttpError(null, error.message);
        }
        return Promise.reject(error);
    }
);

const handleHttpError = (status, defaultErrorMessage) => {
    switch (status) {
        case 401:
            console.log('Token expired,please login again');
            localStorage.removeItem('token');
            window.location.href = '/login';
            break;
        case 403:
            console.log('You are not authorized to access this resource');
            break;
        case 500:
            console.log('Server error,please try again later');
            break
        default:
            console.log(defaultErrorMessage);
    }
};

export default axiosInstance;