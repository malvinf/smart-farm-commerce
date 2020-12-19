import React from 'react';
import { Navbar } from '../../components';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar activeMenu="Home" />
      <div className="container">
        <div className="d-flex">
          <div className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default Home;
