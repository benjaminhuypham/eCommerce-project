import React from 'react';
import CartContainer from './CartContainer';
import '../App.css'

const Cart = ({cartItems}) => {
  return (
    <div className="cart">
      <h1>CART</h1>
      <CartContainer cartItems={cartItems} />
    </div>
  );
};

export default Cart;