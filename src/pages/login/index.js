/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { setCookie } from '../../utils/cookie';
import { auth } from '../../services';
import './style.css';

const Login = () => {
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('Customer');
  const [error, setError] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const spinner = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  const onSubmitLogin = () => {
    setLoginLoading(true);
    if (accountType === 'Customer') {
      auth
        .LoginC(email, password)
        .then((res) => {
          const cookieToken = res.data.data.token;
          const cookieId = res.data.data.id;
          const cookieUser = res.data.data.name;
          const cookieAccountType = accountType;
          setError(res.status);
          setCookie('accountType', JSON.stringify(cookieAccountType), 10000);
          setCookie('userData', JSON.stringify(cookieUser), 10000);
          setCookie('id', JSON.stringify(cookieId), 10000);
          setCookie('token', JSON.stringify(cookieToken), 10000);
        })
        .catch((err) => {
          setError(err.response.status);
          setErrorMsg(err.response.data.error);
        });
    } else {
      auth
        .LoginP(email, password)
        .then((res) => {
          const cookieToken = res.data.data.token;
          const cookieId = res.data.data.id;
          const cookieUser = res.data.data.name;
          const cookieAccountType = accountType;
          setError(res.status);
          setCookie('accountType', JSON.stringify(cookieAccountType), 10000);
          setCookie('userData', JSON.stringify(cookieUser), 10000);
          setCookie('id', JSON.stringify(cookieId), 10000);
          setCookie('token', JSON.stringify(cookieToken), 10000);
        })
        .catch((err) => {
          setError(err.response.status);
          setErrorMsg(err.response.data.error);
        });
    }
  };

  useEffect(() => {
    if (error === 401) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: errorMsg,
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        setLoginLoading(false);
        window.location.reload();
      });
    } else if (error === 200) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text:
          'Kamu berhasil login, dan akan kami arahkan kembali kehalaman awal.',
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        window.location.href = '/';
      });
    }
  }, [error, errorMsg]);

  return (
    <>
      <Helmet>
        <title>dél Harvèst - Login</title>
        <meta name="description" content="Login Masuk" />
      </Helmet>
      <div className="container pg-login d-flex h-100">
        <div className="loginForm">
          <div className="login">
            <h5 className="text-center">masuk</h5>
            <h1 className="text-center mb-5 appsName">dél Harvèst</h1>
            <form
              className="loginForm"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              <input
                className="form-control form-control-sm email mb-3"
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="form-control form-control-sm password mb-3"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="accountType" className="form-label mb-3 w-100">
                Login sebagai apa?
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
                      setAccountType('Petani');
                    }}
                    className={`me-auto accountTypes ${
                      accountType === 'Petani' ? 'active' : ''
                    }`}
                  >
                    Petani
                  </a>
                </div>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  name="accountType"
                  value={accountType}
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
                {isLoginLoading ? spinner : 'masuk'}
              </button>
            </form>
          </div>
          <div className="notRegistered">
            <h5>Hallo!</h5>
            <p>
              Belum punya akun <strong>dél Harvèst</strong>? jangan khawatir
              anda bisa melakukannya dengan tombol ini!
            </p>
            <a
              href="/register"
              className="buttonDaftar"
              type="button"
              disabled={isLoginLoading}
            >
              Daftar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
