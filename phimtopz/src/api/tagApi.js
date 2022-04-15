import axiosClient from "./axiosClient";

// api/productApi.js
const tagApi = {
  getAll: (params) => {
    const url = '/tag';
    return axiosClient.get(url, { params });
  },
  // getId: (id) => {
  //   const url = `/movie/${id}`;
  //   return axiosClient.get(url);
  // },
}

  
export default tagApi;