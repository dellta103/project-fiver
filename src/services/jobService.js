import axios from "axios";
import { BASEURL, TOKEN, TOKEN_USER } from "../utils/config";

export const jobService = {
  getMainJobList: () => {
    return axios({
      url: `${BASEURL}/api/type-jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobList: () => {
    return axios({
      url: `${BASEURL}/api/jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobListByName: (name) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-name?name=${name}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobDetail: (uri) => {
    return axios({
      url: `${BASEURL}/api${uri}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  getJobsByType: (uri) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-type?type=${uri}&skip=0&llimit=10`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  bookJob: (uri, userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs/booking/${uri}`,
      method: "PATCH",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  getComments: (uri) => {
    return axios({
      url: `${BASEURL}/api/comments/by-job/${uri}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  newComment: (values, userToken) => {
    return axios({
      url: `${BASEURL}/api/comments`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  getBookedJobs: (userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-user`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  addNewGig: (values, userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  updateGigImage: (values, id, userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs/upload-image/${id}`,
      method: "POST",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  getGigs: () => {
    return axios({
      url: `${BASEURL}/api/jobs`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  findGigs: (name) => {
    return axios({
      url: `${BASEURL}/api/jobs/by-name?name=${name}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN,
      },
    });
  },
  editGigs: (values, id, userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs/${id}`,
      method: "PUT",
      data: values,
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
  deleteGigs: (id, userToken) => {
    return axios({
      url: `${BASEURL}/api/jobs/${id}`,
      method: "DELETE",
      headers: {
        tokenByClass: TOKEN,
        token: userToken,
      },
    });
  },
};
