import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, setCookie } from '../../utils/cookie';
import './style.css';

const Navbar = (props) => {
  const { activeMenu } = props;
  const listMenu = ['home', 'product'];
  const Logout = () => {
    setCookie('userData', '', -1);
    setCookie('token', '', -1);
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
            ) : (
              <>
                <div className="register my-auto mx-3">
                  <Link className="d-flex" to="/Register" key="login">
                    <div className="menu-login">Daftar Akun</div>
                  </Link>
                </div>
                <div className="login">
                  <Link className="d-flex" to="/Login" key="login">
                    <div className="menu-login">Login</div>
                  </Link>
                </div>
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
