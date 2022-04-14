import axios from "axios";
import { BASEURL, TOKEN, TOKEN_USER, TOKEN_ADMIN } from "../utils/config";

export const userService = {
  signUp: (values) => {
    return axios({
      url: `${BASEURL}/api/auth/signup`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  signIn: (values) => {
    return axios({
      url: `${BASEURL}/api/auth/signin`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  uploadAvatar: (values, userToken) => {
    return axios({
      url: `${BASEURL}/api/users/upload-avatar`,
      method: "POST",
      data: values,

      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  editInfo: (values, id, userToken) => {
    return axios({
      url: `${BASEURL}/api/users/${id}`,
      method: "PUT",
      data: { ...values },
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  getUsers: () => {
    return axios({
      url: `${BASEURL}/api/users`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  removeUser: (id, userToken) => {
    return axios({
      url: `${BASEURL}/api/users/${id}`,
      method: "DELETE",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  findUser: (name, userToken) => {
    return axios({
      url: `${BASEURL}/api/users/pagination-search?name=${name}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  addAdmin: (values, userToken) => {
    return axios({
      url: `${BASEURL}/api/users`,
      method: "POST",
      data: { ...values, role: "ADMIN" },
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  getDetailUser: (id, userToken) => {
    return axios({
      url: `${BASEURL}/api/users/${id}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
};
