import BaseService from './baseService';
import API from '../config/rest';

const CreateProduct = (
  title,
  price,
  stock,
  description,
  images,
  category,
  minimum,
  unit
) => {
  return BaseService.post(API.PRODUCT, {
    title,
    price,
    stock,
    description,
    images,
    category,
    minimum,
    unit,
  });
};

export default { CreateProduct };
