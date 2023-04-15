import axios from "axios";
import { baseUrl, endpoints } from "../baseUrls";

export const getUsers = () => {
  return axios({
    method: "get",
    headers: { accessToken: "Sinan" },
    url: `${baseUrl}${endpoints.todos.endpoint}`,
  });
};

export const addUser = ({ username, password }) => {
  return axios({
    method: "post",
    url: `${baseUrl}${endpoints.todos.endpoint}`,
    headers: { accessToken: "Sinan" },
    data: {
      username,
      password,
    },
  });
};
