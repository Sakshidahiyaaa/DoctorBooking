import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;

export const getDoctors = async () => {
  try {
    const res = await axios.get(`${API}/api/doctors`);
    return res.data;
  } catch (err) {
    console.error("Error fetching doctors:", err);
    throw err;
  }
};

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${API}/api/auth/login`, data);
    return res.data;
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
};
