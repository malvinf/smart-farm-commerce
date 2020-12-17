// eslint-disable-next-line import/named
import { Login, Home, Register, BuyerProduct, SellerProduct } from '../pages';

const routes = [
  {
    path: '/ProductForBuyer',
    component: BuyerProduct,
    isPublic: true,
  },
  {
    path: '/ProductForSeller',
    component: SellerProduct,
    isPublic: true,
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
