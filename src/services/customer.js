import BaseService from './baseService';
import API from '../config/rest';

const getCustomer = (id) => {
  return BaseService.get(API.CUSTOMER(id));
};

const updateCustomer = (id, name, email, password, phoneNumber, address) => {
  return BaseService.put(API.CUSTOMER(id), {
    name,
    email,
    password,
    phoneNumber,
    address,
  });
};

const deleteCustomer = (id) => {
  return BaseService.delete(API.CUSTOMER(id));
};

export default { getCustomer, updateCustomer, deleteCustomer };
