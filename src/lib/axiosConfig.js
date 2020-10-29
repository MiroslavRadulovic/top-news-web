import axios from "axios";

const config = process.env.REACT_APP_API_HOST;
const instance = axios.create({
  baseURL: config,
});
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.post["Content-Type"] =
  "application/json, charset=utf-8";
instance.defaults.adapter = require("axios/lib/adapters/http");
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    console.log(error);
  }
);

export default instance;
