import axios from 'axios';
import { getCookie } from '../utils/cookie';

function getTokenAuth() {
  if (getCookie('token')) {
    return JSON.parse(getCookie('token'));
  }
  return '';
}

const createAxiosInterceptor = (url) => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: '*/*',
      'Accept-Language': 'es',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getTokenAuth()}`,
    },
  });
  axiosCreate.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseServiceFile = createAxiosInterceptor(process.env.REACT_APP_API);

export default BaseServiceFile;
