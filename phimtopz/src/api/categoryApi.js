import axiosClient from "./axiosClient";

// api/productApi.js
const categoryApi = {
  getAll: (params) => {
    const url = '/category';
    return axiosClient.get(url, { params });
  },
  // getId: (id) => {
  //   const url = `/movie/${id}`;
  //   return axiosClient.get(url);
  // },
}

  
export default categoryApi;