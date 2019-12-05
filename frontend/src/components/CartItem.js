import React from 'react';
import '../App.css'

const CartItem = ({cartItem}) => {
  return (
    <div className="cart-item">
        <div>
          <img src={cartItem.image} alt={`${cartItem.image}`} />
          <p>{cartItem.brand}</p>
        </div>
        <div>
          ${cartItem.price}
        </div>
        <div>
          <button>+</button>
          {cartItem.length}
          <button>-</button>
          <button>Remove</button>
        </div>
    </div>
  );
};

export default CartItem