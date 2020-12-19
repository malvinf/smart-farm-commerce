import baseService from './baseService';
import API from '../config/rest';

const LoginC = (email, password) => {
  return baseService.post(API.LOGINC, { email, password });
};

const LoginP = (email, password) => {
  return baseService.post(API.LOGINP, { email, password });
};

const GetCustomer = (id) => {
  return baseService.get(`${API.CUSTOMER}/${id}`);
};

export default { LoginC, LoginP, GetCustomer };
