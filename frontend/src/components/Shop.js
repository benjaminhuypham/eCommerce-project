import React, { Component } from 'react'
import CardContainer from './CardContainer'

export default class Shop extends Component {
  render() {
    const {items, updateCartItem} = this.props;
    return (
      <div>
        <CardContainer items={items} updateCartItem={updateCartItem} />
      </div>
    )
  }
}
