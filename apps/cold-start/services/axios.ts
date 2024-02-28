import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.234.84.66:8000/api/v1"
})