import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Login from './Login';
import Cart from './Cart'

const products_url = "http://localhost:3000/products"
const cart_items_url = "http://localhost:3000/cart_items"

export default class Main extends Component {

  state = {
    items: [], 
    cartItems: []
  }

  componentDidMount(){
    fetch(products_url)
      .then(response => response.json())
      .then(items => this.setState({items}))
    
    fetch(cart_items_url)
      .then(response => response.json())
      .then(cartItems => this.setState({cartItems}))
  }

  // showShop = () => {
  //   const {$token} = localStorage.token
  //   fetch(products_url, {
  //     method: "GET",
  //     headers: {
  //       'Content-Type':'application/json',
  //       'Authorization': `Bearer ${$token}`
  //     }
  //   }).then(response => response.json())
  //   .then(items => this.setState({items}))
  // }

  updateCartItem = item => {
    const {cartItems} = this.state
    fetch(cart_items_url, {
      method: "POST", 
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
          image: item.image, 
          brand: item.brand, 
          title: item.title, 
          price: item.price
      })
    }).then(response => response.json())
      .then(cartItem => this.setState({
        cartItems: [...cartItems, cartItem]
      }))
  }

  render() {
    const {items, cartItems} = this.state
    
    return (
      <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop items={items} updateCartItem={this.updateCartItem} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {/* render={props => <Login {...props} 
            showShop={this.showShop}/>}
            /> */}
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
          </Switch>
      </div>
    )
  }
}
