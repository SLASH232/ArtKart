import axios from "axios";

const BASE_URL = "http://localhost:8001/api/";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDBhYmNlMzg5YTdkOGJiMGM1MGUyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzUxMDMyNywiZXhwIjoxNjU3NzY5NTI3fQ.nI9SZZauNsO5gvpWpuqTUX8Zcp2z8iVEi9l3-sSQ4ow"

const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
