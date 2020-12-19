/* eslint-disable camelcase */
import baseService from './baseService';
import baseServiceFile from './baseServiceFile';
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
  return baseService.post(API.PRODUCT, {
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

const UploadProductImg = (file) => {
  return baseServiceFile.post(API.UPLOAD, file);
};

const GetProduct = () => {
  return baseService.get(API.PRODUCT);
};

const AddtoCart = (cart, id_user, id, purchased_stock) => {
  return baseService.post(API.GOODS, { cart, id_user, id, purchased_stock });
};

const GetCart = (id) => {
  return baseService.get(`${API.GOODS}/${id}`);
};

const DeleteCart = (id) => {
  return baseService.delete(`${API.GOODS}/${id}`);
};

const Checkout = (alamat, total, metode, kurir, durasi) => {
  return baseService.post(API.CHECKOUT, {
    alamat,
    total,
    metode,
    kurir,
    durasi,
  });
};

export default {
  CreateProduct,
  GetProduct,
  AddtoCart,
  GetCart,
  DeleteCart,
  Checkout,
  UploadProductImg,
};
