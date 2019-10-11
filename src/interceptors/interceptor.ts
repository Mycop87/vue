import axios from 'axios';

export default function setup() {
  axios.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${window.sessionStorage.getItem('token')}`;
    return config;
  }, (err) => {
    return Promise.reject(err);
  });
  axios.interceptors.response.use((resp: any) => {
    if (resp.status !== 200) {
      return new Error();
    }
    return resp;
  }, (err) => {
    if (err.response.data.error) {
      return Promise.reject(err.response.data.error);
    }
    return Promise.reject();
  });

}
