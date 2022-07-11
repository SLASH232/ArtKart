import axios from 'axios'

const BASE_URL="https://mern-artkart.herokuapp.com/api/"


// "http://localhost:8001/api"
// const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDBhYmNlMzg5YTdkOGJiMGM1MGUyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODQwNTUxMSwiZXhwIjoxNjQ4NjY0NzExfQ.FaAsuufLS1_5L2WFgJ04OHsENrBaoi67vqFIU-cOAW4"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});