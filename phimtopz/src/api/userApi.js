import axiosClient from "./axiosClient";

// api/productApi.js
const userApi = {
  getAll: (params) => {
    const url = '/user';
    return axiosClient.get(url, { params });
  },
  // getId: (id) => {
  //   const url = `/movie/${id}`;
  //   return axiosClient.get(url);
  // },
}

  
export default userApi;