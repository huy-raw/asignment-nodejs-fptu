import axios from "axios";

const BASE_URL = "http://localhost:8000/";

export const axiosConfig = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

axiosConfig.defaults.headers.common["Content-Type"] = "application/json";