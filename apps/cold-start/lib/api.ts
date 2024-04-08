import axios from "axios";

interface TokenInfo {
  token?: string;
  expiration: number;
}

const BASE_URL = process.env.API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});


export { api };
