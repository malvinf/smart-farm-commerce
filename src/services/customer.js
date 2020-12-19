import baseService from './baseService';
import API from '../config/rest';

const Customer = (name, email, address, password, phoneNumber, accountType) => {
  return baseService.post(API.CUSTOMER, {
    name,
    email,
    address,
    password,
    phoneNumber,
    accountType,
  });
};

export default { Customer };
