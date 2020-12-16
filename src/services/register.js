import BaseService from './baseService';
import API from '../config/rest';

const Register = (name, email, address, password, phoneNumber, accountType) => {
  return BaseService.post(API.REGISTER, {
    name,
    email,
    address,
    password,
    phoneNumber,
    accountType,
  });
};

export default { Register };
