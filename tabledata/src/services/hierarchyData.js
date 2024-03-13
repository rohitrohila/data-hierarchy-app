import axios from "axios";

const API_URL = "http://localhost:3000"; // Replace with your API base URL

const hierarchyApiService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (endpoint) => {
  return hierarchyApiService
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export default hierarchyApiService;
