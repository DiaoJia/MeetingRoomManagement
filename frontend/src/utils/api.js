import axiosInstance from './axiosInstance';

const http = {
    get: (url, params, config = {}) => axiosInstance.get(url, { params, ...config }),
    post: (url, data, config = {}) => axiosInstance.post(url, data, config),
    put: (url, data, config = {}) => axiosInstance.put(url, data, config),
    delete: (url, config = {}) => axiosInstance.delete(url, config),
    upload: (url,file,config = {}) =>{
        const formData = new FormData();
        formData.append('file',file);
        return axiosInstance.post(url,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            ...config
        });
    }
};

export default http;