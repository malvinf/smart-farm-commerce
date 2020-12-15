import React from 'react';
import { Navbar } from '../../components';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar activeMenu="home" />
      <div className="container">
        <div className="d-flex">
          <div className="me-auto">home</div>
        </div>
      </div>
    </>
  );
};

export default Home;
