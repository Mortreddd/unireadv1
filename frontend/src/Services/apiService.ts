import axios from "axios";

import { API_BASE_URL } from "@/Utils/Constants";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("jwtToken") ?? null;

  if (jwtToken) {
    config.headers["Authorization"] = `Bearer ${jwtToken}`;
  }

  return config;
});

export default apiService;
