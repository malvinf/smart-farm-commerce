import { Login, Home } from '../pages';

const routes = [
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
