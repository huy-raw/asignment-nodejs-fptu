import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,  
});

axiosClient.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
