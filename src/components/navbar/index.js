import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { produk } from '../../services';
import { isUserAuthenticated, setCookie, getCookie } from '../../utils/cookie';
import './style.css';

const Navbar = (props) => {
  const { activeMenu } = props;
  const listMenu = ['Home', 'Product', 'ProductForSeller'];
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    produk.GetCart(JSON.parse(getCookie('id'))).then((res) => {
      setCartQty(res.data.length);
    });
  }, [cartQty]);

  const Logout = () => {
    setCookie('userData', '', -1);
    setCookie('token', '', -1);
    setCookie('accountType', '', -1);
    setCookie('id', '', -1);
    window.location.replace('/');
  };

  return (
    <div className="container-fluid container--header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-block">
          <div className="d-flex mb-3">
            <a href="/" className="navbar-brand me-auto">
              dél Harvèst
            </a>
            {isUserAuthenticated() ? (
              <div className="d-flex">
                <Link className="d-flex me-3 cart" to="/cart">
                  <i className="fas fa-shopping-cart m-auto " />
                  <p className="cartQty m-auto ">{` (${cartQty})`}</p>
                </Link>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{JSON.parse(getCookie('userData'))}</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {JSON.parse(getCookie('accountType')) === 'Petani' ? (
                      <li>
                        <Link className="d-flex nav-link" to="/" key="farm">
                          <div className="menu">Farm</div>
                        </Link>
                      </li>
                    ) : (
                      <></>
                    )}
                    <li>
                      <Link
                        className="d-flex nav-link"
                        to="/"
                        onClick={() => {
                          Logout();
                        }}
                        key="logout"
                      >
                        <div className="menu">Logout</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div className="register my-auto mx-3">
                  <Link className="d-flex" to="/Register" key="login">
                    <div className="menu-login">Daftar Akun</div>
                  </Link>
                </div>
                <Link className="d-flex login" to="/Login" key="login">
                  <div className="menu-login">Login</div>
                </Link>
              </>
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="headerNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {listMenu.map((name) => {
                if (
                  JSON.parse(getCookie('accountType')) !== 'Petani' &&
                  name === 'ProductForSeller'
                ) {
                  return <div key={name} />;
                }

                if (activeMenu === name) {
                  return (
                    <li className="nav-item" key={name}>
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={`/${name}`}
                      >
                        <div className="menu">{name}</div>
                      </Link>
                    </li>
                  );
                }

                return (
                  <li className="nav-item" key={name}>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={`/${name}`}
                    >
                      <div className="menu">{name}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
