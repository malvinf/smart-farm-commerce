/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { daftar } from '../../services';
import './style.css';

const Register = () => {
  const spinner = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [error, setError] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    daftar
      .Register(name, email, address, password, phoneNumber, accountType)
      .catch(() => {
        setError(true);
      });

    if (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Akun kamu gagal dibuat 🙁',
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text:
          'Akun kamu telah berhasil dibuat, kamu akan diarahkan kehalaman login',
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        window.location.href = '/login';
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>dél Harvèst - Register</title>
        <meta name="description" content="Register Daftar" />
      </Helmet>
      <div className="container pg-register d-flex h-100">
        <div className="registerForm">
          <div className="register">
            <h5 className="text-center">Daftar Sekarang</h5>
            <h1 className="text-center mb-5 appsName">dél Harvèst</h1>
            <form
              className="loginForm"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              <label htmlFor="name" className="form-label w-100">
                Nama
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="nama"
                  id="name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="email" className="form-label w-100">
                Alamat Email
                <input
                  className="form-control form-control-sm mb-3"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="email"
                  id="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="address" className="form-label w-100">
                Alamat
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="address"
                  value={address}
                  placeholder="alamat"
                  id="address"
                  required
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="phonenumber" className="form-label w-100">
                Nomor HP
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  name="phonenumber"
                  value={phoneNumber}
                  placeholder="nomor hp"
                  id="phonenumber"
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="password" className="form-label w-100">
                Password
                <input
                  className="form-control form-control-sm mb-3"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="accountType" className="form-label mb-3 w-100">
                Ingin mendaftar sebagai apa?
                <div className="d-flex">
                  <a
                    href="##"
                    onClick={() => {
                      setAccountType('Customer');
                    }}
                    className={`me-auto accountTypes ${
                      accountType === 'Customer' ? 'active' : ''
                    }`}
                  >
                    Customer
                  </a>
                  <a
                    href="##"
                    onClick={() => {
                      setAccountType('Seller');
                    }}
                    className={`me-auto accountTypes ${
                      accountType === 'Seller' ? 'active' : ''
                    }`}
                  >
                    Seller
                  </a>
                </div>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="accountType"
                  value={accountType}
                  hidden
                />
              </label>
              <button
                className="buttonSubmit"
                type="submit"
                value="Submit"
                disabled={isLoginLoading}
              >
                {isLoginLoading ? spinner : 'daftar'}
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

export default Register;
