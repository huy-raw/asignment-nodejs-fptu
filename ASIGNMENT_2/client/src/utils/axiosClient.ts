import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const axiosClient = axios.create({
    baseURL: BASE_URL
});

axiosClient.defaults.headers.common["Content-Type"] = "application/json; application/x-www-form-urlencoded; charset=UTF-8";
axiosClient.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axiosClient.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axiosClient.defaults.headers.post['Access-Control-Expose-Headers']='accesstoken'

