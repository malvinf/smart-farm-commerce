// eslint-disable-next-line import/named
import {
  Login,
  Home,
  Register,
  BuyerProduct,
  SellerProduct,
  Cart,
  Customer,
  ChangePass,
  Deactive,
} from '../pages';

const routes = [
  {
    path: '/Cart',
    component: Cart,
    isPublic: false,
    accountType: 'Customer',
  },
  {
    path: '/Product',
    component: BuyerProduct,
    isPublic: true,
  },
  {
    path: '/ProductForSeller',
    component: SellerProduct,
    isPublic: false,
    accountType: 'Petani',
  },
  {
    path: '/Register',
    component: Register,
    isPublic: true,
  },
  {
    path: '/Login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/Customer',
    component: Customer,
    isPublic: true,
  },
  {
    path: '/Changepass',
    component: ChangePass,
    isPublic: true,
  },
  {
    path: '/Deactive',
    component: Deactive,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
