"use client"

import axios from "axios";
import { getToken } from "./session";

const baseURL = process.env.SOT_API_URL

const api = axios.create({
    baseURL: baseURL
})

// api.interceptors.request.use(
//     async config => {
//         const token = await getToken()
//         console.log("Token: ", token)

//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )

export { api }