/* eslint-disable no-underscore-dangle */
// this page is made for buyer, no need auth, just view all products
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { Navbar, ProductCard } from '../../components';
import { produk } from '../../services';
import './style.css';

const BuyerProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    produk.GetProduct().then((res) => {
      setProductList(res.data);
    });
  }, [productList]);

  const AddtoCart = (productAdd) => {
    produk
      .AddtoCart(
        productAdd.cart.cart,
        productAdd.id_user,
        productAdd.id,
        productAdd.purchased_stock
      )
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Berhasil menambahkan ke keranjang! 😁',
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setProductList([]);
        });
      })
      .catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text:
            'Maaf kami belum berhasil menambahkan barang tersebut ke keranjang!',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>dél Harvèst - Product</title>
        <meta name="description" content="List Product" />
      </Helmet>
      <Navbar activeMenu="Product" />
      <div className="container">
        <div className="d-flex">
          <div className="my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {productList.map((p) => {
                if (p.stock > 0) {
                  return (
                    <ProductCard addtocart={AddtoCart} key={p._id} p={p} />
                  );
                }
                return <></>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerProduct;
