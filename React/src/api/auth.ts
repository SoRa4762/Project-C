import axios from "axios";
import { loginType, registerType } from "../interfaces/userInterface";
const baseUrl = "http://localhost:5000";

export const registerUser = async (data: registerType) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (data: loginType) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
