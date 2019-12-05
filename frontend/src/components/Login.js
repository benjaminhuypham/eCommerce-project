import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Login extends Component {

  state = {
    username: "", 
    email: "",
    password: ""
  }

  handleSubmit = event => {
    const {history} = this.props
    event.preventDefault()
    fetch("http://localhost:3000/authenticate", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      }, 
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password 
      })
    }).then(response => response.json())
    // .then(token => localStorage.setItem("token",token.auth_token.token)) 
5    // .then(() => history.push({
    //   pathname: '/shop'
    // })).then(() => this.updateShop())
  }

  handleChange = event => {
    const {name, value} = event.target
    console.log(value)
    this.setState({
      [name]: value
    })
  }

  updateShop = () => {
    this.props.showShop()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input 
              type="username" 
              placeholder="text" 
              value={this.state.username} 
              name="username" 
              onChange={this.handleChange} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              placeholder="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password: 
            <input 
              type="password" 
              placeholder="password" 
              value={this.state.password} 
              name="password" 
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* <Link to='/SignIn'>Sign In</Link>
        <Link to='/SignUp'>Signup</Link> */}
      </div>
    )
  }
}
