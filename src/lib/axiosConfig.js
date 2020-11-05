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
    /**
     * Error messages sorted by status code and show in form of notifications.
     */
    if (error.response && error.response.status) {
      if (error.response.status === 400) {
        notification.error({
          message: 'Bad request!',
          description: error.response.data.message,
        });
      }
      if (error.response.status === 401) {
        notification.error({
          message: 'Unauthorized!',
          description: error.response.data.message,
        });
      }
      if (error.response.status === 426) {
        notification.error({
          message: 'Cors not allowed!',
          description: error.response.data.message,
        });
      }
      if (error.response.status === 429) {
        notification.error({
          message: ' Too Many Requests!',
          description: error.response.data.message,
        });
      }
      if (error.response.status === 500) {
        notification.error({
          message: 'Server error!',
          description: error.response.data.message,
        });
      }
    }
  }
);

export default instance;
