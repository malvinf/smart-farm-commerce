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

const getCustomer = (id) => {
  return baseService.get(API.CUSTOMER(id));
};

const updateCustomer = (id, name, email, password, nohp, alamat) => {
  return baseService.put(API.CUSTOMER(id), {
    name,
    email,
    password,
    nohp,
    alamat,
  });
};

const deleteCustomer = (id) => {
  return baseService.delete(API.CUSTOMER(id));
};

export default { getCustomer, updateCustomer, deleteCustomer, Customer };
