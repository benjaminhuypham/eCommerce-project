import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h1>welcome to shoppie</h1>
      <p>where price meets quality</p>
      <Link to="/shop" className="shop-button">Shop Now</Link>
    </div>
  );
};

export default Home;