import axios from "axios";

const baseURL = process.env.SOT_API_URL

export const api = axios.create({
    baseURL,
})