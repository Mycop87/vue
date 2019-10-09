import axios from 'axios';
import { AuthService } from '@/services/auth.service.ts';

const authService = new AuthService();

export default function setup() {
  axios.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${authService.token}`;
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
