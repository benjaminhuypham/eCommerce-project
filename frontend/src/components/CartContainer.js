import React from 'react';
import CartItem from './CartItem';
import '../App.css'

const CartContainer = ({cartItems}) => {
  const $cartItems = () => {
    return cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />
    })
  }
  return (
    <div className="cart-container">
      <div>
        <p>Item</p>
        <p>Price</p>
        <p>Quality</p>
      </div>
      {$cartItems()}
    </div>
  );
};

export default CartContainer;