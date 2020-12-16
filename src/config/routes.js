import { Login, Home, Register } from '../pages';

const routes = [
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
