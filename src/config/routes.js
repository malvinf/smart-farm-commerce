// eslint-disable-next-line import/named
import {
  Login,
  Home,
  Register,
  BuyerProduct,
  SellerProduct,
  Cart,
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
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
