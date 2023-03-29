import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request(
  (request) => {
    console.log(request);
    //edit request ...
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.response(
  (response) => {
    console.log(response);
    //edit response ...
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
