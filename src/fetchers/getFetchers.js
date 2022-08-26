import axios from "axios";
import { getConfiguration } from "../config";

const BASE_URL = getConfiguration().apiUrl;

export const getResourceDetails = async () => {
  /* let url = 'http://localhost:3001/employee'; */
  let url = `${BASE_URL}/employee`;
  const response = await axios.get(url);
  if (response.statusText !== "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};

export const getProjectDetails = async () => {
  /* let url = 'http://localhost:3001/projects'; */
  let url = `${BASE_URL}/projects`;
  const response = await axios.get(url);
  if (response.statusText !== "OK") {
    throw new Error("Something went wrong!");
  }
  return response.data;
};
