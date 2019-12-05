import React from 'react';
import {Link} from 'react-router-dom'
import cart from '../images/cart.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo"> 
        <h1><Link to="/" className="logo" className="logo-link">Shoppie</Link></h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="option-1">Home</Link></li>
          <li><Link to="/shop" className="option-2">Shop</Link></li>
          <li><Link to="/contact" className="option-2">Contact</Link></li>
          <li><Link to="/login" className="option-2">Login</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart"><img src={cart} alt="cart" /></Link>
      </div>
    </div>
  );
};

export default Header;