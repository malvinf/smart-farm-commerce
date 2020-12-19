export default {
  LOGINC: '/user/login',
  LOGINP: '/userPetani/login',
  REGISTERC: '/user/register',
  REGISTERP: '/userPetani/register',
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  CUSTOMER: (id) => {
    return `/customer/${id}`;
  },
  PRODUCT: '/product',
  UPLOAD_IMG: '/upload',
  GOODS: '/goods',
  CHECKOUT: '/checkout',
  UPLOAD: '/upload',
};
