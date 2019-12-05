import React, {Component} from 'react';
import '../App.css'

class CartItem extends Component{

  // deleteItemFromCart = () => {
  //   deleteCartItem(cartItem)
  //   // console.log(this.props.item)
  // }


  // deleteItemFromCart = () => {
  //   deleteCartItem(cartItem)
  // }

  state = {
    quantity: 1
  }

  increment = e => {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  decrement = e => {
    this.setState({
      quantity: this.state.quantity - 1
    })
  }
      
  render () {
    const {cartItem, deleteCartItem} = this.props
    return (
      <div className="cart-item">
          <div className="cart-item item">
            <img src={cartItem.image} alt={`${cartItem.image}`} />
            <p>{cartItem.brand}</p>
          </div>
          <div className="cart-item price">
            ${cartItem.price}*{this.state.quantity}
          </div>
          <div className="cart-item quantity">
            <button onClick={this.increment}>+</button>
            {this.state.quantity}
            <button onClick={this.decrement}>-</button>
            <button onClick={() => deleteCartItem(cartItem)}>Remove</button>
          </div>
      </div>
    );
  }
};

export default CartItem