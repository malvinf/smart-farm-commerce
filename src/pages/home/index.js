/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Navbar } from '../../components';
import { Poster } from '../../assets';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar activeMenu="Home" />
      <div className="container container--home">
        <div className="d-flex mt-5">
          <p className="mb-5 pb-5 border-bottom">
            Kami menjual hasil{' '}
            <a href="/product">
              <span className="pertanian_fancy">pertanian</span>
            </a>{' '}
            langsung dari petani.
          </p>
          <img src={Poster} alt="Poster" />
        </div>
      </div>
    </>
  );
};

export default Home;
