import BaseService from './baseService';
import API from '../config/rest';

const Login = (email, password) => {
  return BaseService.post(API.LOGIN, { email, password });
};

export default { Login };
