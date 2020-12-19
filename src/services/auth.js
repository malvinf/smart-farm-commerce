import BaseService from './baseService';
import API from '../config/rest';
import { baseService } from '.';

const LoginC = (email, password) => {
  return BaseService.post(API.LOGINC, { email, password });
};

const LoginP = (email, password) => {
  return BaseService.post(API.LOGINP, { email, password });
};

const GetCustomer = (id) => {
  return baseService.get(`${API.CUSTOMER}/${id}`);
};

export default { LoginC, LoginP, GetCustomer };
