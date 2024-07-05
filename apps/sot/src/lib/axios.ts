import axios from "axios";

const baseURL = process.env.SOT_API_URL;

const api = axios.create({
  baseURL: "http://localhost:3030",
});

export { api };
