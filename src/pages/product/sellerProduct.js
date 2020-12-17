/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { daftar } from '../../services';
import './style.css';

const SellerProduct = () => {
  const spinner = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [category, setCategory] = useState('');
  const [minimum, setMinimun] = useState('');
  const [unit, setUnit] = useState('');
  const [error, setError] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    daftar
      .Register(
        title,
        price,
        stock,
        description,
        images,
        category,
        minimum,
        unit
      )
      .catch(() => {
        setError(true);
      });

    if (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Gagal 🙁',
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Produk berhasil ditambahkan!',
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        window.location.href = '/SellerProduct';
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>dél Harvèst - CreateProduct</title>
        <meta name="description" content="Register Daftar" />
      </Helmet>
      <div className="container pg-register d-flex h-100">
        <div className="registerForm">
          <div className="register">
            <h5 className="text-center">Tambahkan Produk</h5>
            <h1 className="text-center mb-5 appsName">dél Harvèst</h1>
            <form
              className="loginForm"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              <label htmlFor="nama produk" className="form-label w-100">
                Nama
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Nama Produk"
                  id="name"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="price" className="form-label w-100">
                Alamat Email
                <input
                  className="form-control form-control-sm mb-3"
                  type="price"
                  name="price"
                  value={price}
                  placeholder="Harga Produk"
                  id="price"
                  required
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="stock" className="form-label w-100">
                Alamat
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="stock"
                  value={stock}
                  placeholder="Stock Produk"
                  id="stock"
                  required
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="description" className="form-label w-100">
                Nomor HP
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="phonenumber"
                  value={description}
                  placeholder="Deskripsi Produk"
                  id="description"
                  required
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="category" className="form-label mb-3 w-100">
                Kategori Produk
                <div className="d-flex">
                  <a
                    href="##"
                    onClick={() => {
                      setCategory('Sayuran');
                    }}
                    className={`me-auto category ${
                      category === 'Sayuran' ? 'active' : ''
                    }`}
                  >
                    Sayuran
                  </a>
                  <a
                    href="##"
                    onClick={() => {
                      setCategory('Buah');
                    }}
                    className={`me-auto category ${
                      category === 'Buah' ? 'active' : ''
                    }`}
                  >
                    Buah
                  </a>
                </div>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="category"
                  value={category}
                  hidden
                  readOnly
                />
              </label>
              <label htmlFor="images" className="form-label w-100">
                Tagged for Upload Images later
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="images"
                  value={images}
                  placeholder="Gambar Produk"
                  id="images"
                  required
                  onChange={(e) => {
                    setImages(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="minimum" className="form-label w-100">
                Mininum Pembelian
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="minimum"
                  value={minimum}
                  placeholder="Minimum Jumlah Pembelian Produk"
                  id="minimum"
                  required
                  onChange={(e) => {
                    setMinimun(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="unit" className="form-label mb-3 w-100">
                Unit Minimum Produk
                <div className="d-flex">
                  <a
                    href="##"
                    onClick={() => {
                      setUnit('Kilogram');
                    }}
                    className={`me-auto unit ${
                      unit === 'Kilogram' ? 'active' : ''
                    }`}
                  >
                    Kilogram
                  </a>
                  <a
                    href="##"
                    onClick={() => {
                      setUnit('Gram');
                    }}
                    className={`me-auto unit ${
                      unit === 'Gram' ? 'active' : ''
                    }`}
                  >
                    Gram
                  </a>
                </div>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="category"
                  value={category}
                  hidden
                  readOnly
                />
              </label>
              <button
                className="buttonSubmit"
                type="submit"
                value="Submit"
                disabled={isLoginLoading}
              >
                {isLoginLoading ? spinner : 'Simpan'}
              </button>
            </form>
            <span className="loginQuestion my-5">
              sudah punya akun dél Harvèst? <a href="/login">Masuk</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProduct;
