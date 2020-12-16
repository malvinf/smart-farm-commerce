/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { setCookie } from '../../utils/cookie';
import { auth } from '../../services';
import './style.css';

const Login = () => {
  const spinner = (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  const [isLoginLoading, setLoginLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = () => {
    setLoginLoading(true);
    auth
      .Login(email, password)
      .then((res) => {
        const cookieToken = res.data.token;
        // const cookieUser = res.username;
        // setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.location.replace('/');
      });
  };

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
