import React, {Component} from 'react';
import CartItem from './CartItem';
import '../App.css'

class CartContainer extends Component {


  // state = {
  //   cartItems: this.props.cartItems,
  //   totalPrices: null
  // }

  state = {
    updatedTotalPrice: null
  }
  
  
  // totalCartPrice = () => {
  //   const cartItemPrices = this.props.cartItems.map(cartItem => {
  //     return cartItem.price
  //   })
  //   const totalPrice = cartItemPrices.reduce((a,b) => {return a+b}, 0)
  //   console.log(totalPrice)
  //   this.setState({
  //     updatedTotalPrice: totalPrice
  //   })
  // }


  // addCartItem = e => {
  //   this.totalCartPrice()
  //   console.log(this.state.updatedTotalPrice)
  //   this.setState({
  //     updatedTotalPrice: this.state.updatedTotalPrice - e
  //   })
  // }

  // updateTotalPrice = (totalPrice) => {
  //   this.setState({
  //     updatedTotalPrice: totalPrice
  //   })
  // }

  
  render() {
    const {cartItems, deleteCartItem} = this.props
    const $cartItems = () => {
      return cartItems.map(cartItem => {
        return <CartItem key={cartItem.id} cartItem={cartItem} deleteCartItem={deleteCartItem} addCartItem={this.addCartItem}/>
      })
    }

    const cartItemPrices = this.props.cartItems.map(cartItem => {
      return cartItem.price
    })  
    const totalPrice = cartItemPrices.reduce((a,b) => a+b, 0)
    

    // this.setState({updatedTotalPrice:totalPrice})

    // const quantityIncrement = moreItem => {
    //   return this.setState({updatedTotalPrice:[...this.state.updatedTotalPrice, moreItem]})
    // }


    return (
      <div className="cart-container">
        <div>
          <p>Item</p>
          <p>Price</p>
          <p>Quality</p>
        </div>
        {$cartItems()}
        <div>
          <p></p>
          <p>Total Price: ${totalPrice}</p>
          <button>check out</button>
        </div>
      </div>
    );
  }
};

export default CartContainer;