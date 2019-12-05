import React, { Component } from 'react'
import CardContainer from './CardContainer'
import '../App.css'

export default class Shop extends Component {
  render() {
    const {items, updateCartItem} = this.props;
    return (
      <div className="shop">
        <CardContainer items={items} updateCartItem={updateCartItem} />
      </div>
    )
  }
}
