import { getToken } from "@/lib/session";
import axios from "axios";

const BASE_URL = process.env.API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
    async (config) => {
        const token = await getToken()

        if(token) {
            config.headers.token = token
        }
        return config
    }
)
export { api };
