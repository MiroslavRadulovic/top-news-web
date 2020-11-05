import axios from 'axios';
import { notification } from 'antd';

const config = process.env.REACT_APP_API_HOST;
const instance = axios.create({
  baseURL: config,
});
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.post['Content-Type'] =
  'application/json, charset=utf-8';
instance.defaults.adapter = require('axios/lib/adapters/http');
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
    if (error.response && error.response.status) {
      /**
       * In this case, this is the only error with known status that is thrown by the API and it happens when the API key
       * reaches the limit of requests per 12 hours. In real scenario, there should be a specific list of bugs that are coming
       * from the server and also a suitable error message for each error.
       */
      if (error.response.status === 429) {
        notification.error({
          message: 'Error fetching news data!',
          description: error.response.data.message,
        });
      }
    }
  }
);

export default instance;
