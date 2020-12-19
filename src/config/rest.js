export default {
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  CUSTOMER: (id) => {
    return `/customer/${id}`;
  },
  PRODUCT: '/product',
  UPLOAD_IMG: '/upload',
};
