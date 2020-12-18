// eslint-disable-next-line import/named
import { Login, Home, Customer, ChangePass, Deactive } from '../pages';

const routes = [
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
