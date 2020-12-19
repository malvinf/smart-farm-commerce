import BaseService from './baseService';
import API from '../config/rest';

const RegisterC = (
  name,
  email,
  address,
  password,
  phoneNumber,
  accountType
) => {
  return BaseService.post(API.REGISTERC, {
    name,
    email,
    address,
    password,
    phoneNumber,
    accountType,
  });
};

const RegisterP = (
  name,
  email,
  address,
  password,
  phoneNumber,
  accountType
) => {
  return BaseService.post(API.REGISTERP, {
    name,
    email,
    address,
    password,
    phoneNumber,
    accountType,
  });
};

export default { RegisterC, RegisterP };
