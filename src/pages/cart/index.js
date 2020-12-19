/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import { produk, auth } from '../../services';
import { Navbar, CartList } from '../../components';
import { getCookie } from '../../utils/cookie';
import 'antd/dist/antd.css';
import './style.css';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cust, setCust] = useState('');
  const [durasi, setDurasi] = useState('');
  const [kurir, setKurir] = useState('');
  const [metode, setMetode] = useState('');

  const DeleteCart = (id) => {
    produk
      .DeleteCart(id)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Berhasil menghapus produk dari keranjang! 😁',
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          setCartList([]);
        });
      })
      .catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text:
            'Maaf kami belum berhasil menghapus barang tersebut dari keranjang!',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const Checkout = () => {
    produk
      .Checkout(cust.address, total, metode, kurir, durasi)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Berhasil checkout! 😁',
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          Redirect('/');
        });
      })
      .catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text:
            'Gagal checkout! harap isi durasi, kurir, dan metode pembayaran!',
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  useEffect(() => {
    produk.GetCart(JSON.parse(getCookie('id'))).then((res) => {
      setCartList(res.data);
      const temptotal = res.data.map((cart) => {
        return cart.purchased_stock * cart.cart[0].price;
      });
      const sum = temptotal.reduce((a, b) => {
        return a + b;
      }, 0);
      setTotal(sum);
    });

    auth.GetCustomer(JSON.parse(getCookie('id'))).then((res) => {
      setCust(res.data);
    });
  }, []);

  const calculateTotal = (cost) => {
    setTotal(total + cost);
  };

  return (
    <>
      <Helmet>
        <title>dél Harvèst - Cart</title>
        <meta name="description" content="Cart" />
      </Helmet>
      <Navbar activeMenu="Cart" />
      <div className="container container-all-cart d-flex my-5">
        {cartList.length === 0 ? (
          <div className="d-flex my-5 me-auto justify-content-center">
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
                width: '100%',
              }}
              description={
                <span>
                  <br />
                  {/* <p>Tidak ada product di keranjang belanja mu.</p> */}
                  Lihat <a href="/product">Product</a>
                </span>
              }
            />
          </div>
        ) : (
          <>
            <div className="container-cart">
              <div className="checkoutAlamat border-bottom border-2 mb-3 d-flex">
                <div className="w-50">
                  <p className="border-bottom border-2 pb-3">
                    <strong>Alamat Pengiriman</strong>
                  </p>
                  <p className="m-0">
                    <strong>{cust.name}</strong> (Alamat Rumah)
                  </p>
                  <p className="m-0">{cust.phoneNumber}</p>
                  <p>{cust.address}</p>
                </div>
                <div className="w-50">
                  <p className="border-bottom pb-3">
                    <strong>Pilih Kurir</strong>
                  </p>
                  <select
                    onChange={(e) => {
                      setDurasi(e.target.value);
                    }}
                    className="form-select form-select-sm mb-3"
                    aria-label=".form-select-sm example"
                  >
                    <option hidden value="">
                      Durasi Pengiriman
                    </option>
                    <option value="OneDay">OneDay</option>
                    <option value="Instant">Instant</option>
                    <option value="Reguler">Reguler</option>
                  </select>
                  {durasi !== '' ? (
                    <select
                      onChange={(e) => {
                        setKurir(e.target.value);
                      }}
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option hidden value="">
                        Kurir
                      </option>
                      <option value="JNEH">JNEH</option>
                      <option value="SiGesits">SiGesits</option>
                      <option value="Anterin">Anterin</option>
                    </select>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="d-flex flex-wrap">
                {cartList.map((cart) => {
                  return (
                    <CartList
                      calc={calculateTotal}
                      del={DeleteCart}
                      key={cart._id}
                      cart={cart}
                    />
                  );
                })}
              </div>
            </div>
            <div className="container-checkout">
              <p className="ringkasanBelanja">Ringkasan Belanja</p>
              <select
                onChange={(e) => {
                  setMetode(e.target.value);
                }}
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option hidden value="">
                  Pilih Metode Pembayaran
                </option>
                <option value="Gopay">Gopay</option>
                <option value="Paypal">Paypal</option>
                <option value="BankTransfer">Bank Transfer</option>
              </select>
              <div className="d-flex mb-3">
                <p className="totalHarga my-auto me-auto">Total Harga</p>
                <p className="Harga ms-auto my-auto">{`Rp ${total}`}</p>
              </div>
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={() => {
                  Checkout();
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
