import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = '/movie';
    return axiosClient.get(url, { params });
  },
  // getId: (id) => {
  //   const url = `/movie/${id}`;
  //   return axiosClient.get(url);
  // },
}

  
  export default productApi;