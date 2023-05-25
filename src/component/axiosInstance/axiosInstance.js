import axios from "axios";

let AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/login/',
    timeout: 5000,
});

AxiosInstance.interceptors.request.use(function (config){
    let token = JSON.parse(window.sessionStorage.getItem("sessionData"));
    config.headers['Authorization'] = 'Bearer' + token;
    return config;
});

export default AxiosInstance;