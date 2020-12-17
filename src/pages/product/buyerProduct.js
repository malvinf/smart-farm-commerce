// this page is made for buyer, no need auth, just view all products
import React from 'react';
import { Navbar } from '../../components';

const BuyerProduct = () => {
  return (
    <>
      <Navbar activeMenu="home" />
      <div className="container">
        <div className="d-flex">
          <div className="me-auto">A</div>
        </div>
      </div>
    </>
  );
};

export default BuyerProduct;
