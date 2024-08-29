import axios from "axios";
import { CitizenshipInterface } from "../interfaces/citizenInteface";
const BASE_URL = "http://localhost:5000";
const token = localStorage.getItem("token");
//ts is strict mate!
const parsedToken = JSON.parse(token || "randomToken");

export const addCitizen = async (data: CitizenshipInterface) => {
  try {
    const response = await axios.post(`${BASE_URL}/citizenship`, data, {
      headers: {
        Authorization: `Bearer ${parsedToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCitizen = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/citizenship`, {
      headers: {
        Authorization: `Bearer ${parsedToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getOneCitizen = async (citizenId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/citizenship/${citizenId}`, {
      headers: {
        Authorization: `Bearer ${parsedToken}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteOneCitizen = async (citizenId: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/citizenship/${citizenId}`,
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateOneCitizen = async (
  citizenId: string,
  data: CitizenshipInterface
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/citizenship/${citizenId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
