import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/payment`,
  withCredentials: true,
});

export const createPayment = async (data) => {
  const response = await API.post("/initialize", data);
  return response.data;
};