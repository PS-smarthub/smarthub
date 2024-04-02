import axios from "axios";

const BASE_URL = process.env.API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});
