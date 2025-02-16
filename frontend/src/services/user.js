import http from '../utils/api';

const getUser = (userId) => {
    return http.get(`/users/${userId}`);
};

const updateUser = (data) => {
    return http.put(`/users`, data);
};

const deleteUser = (userId) => {
    return http.delete(`/users/${userId}`);
};

export default { getUser, updateUser, deleteUser };