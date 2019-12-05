import React, { Component } from 'react'

export default class Card extends Component {

  addItemToCart = () => {
    this.props.updateCartItem(this.props.item)
    // console.log(this.props.item)
  }

  render() {
    const {item} = this.props
    return (
      <div>  
        <img src={item.image} alt={`${item.image}`} />
        <p>{item.brand}</p>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button onClick={this.addItemToCart}>Add to Cart</button>
      </div>
    )
  }
}
