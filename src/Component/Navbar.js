import React, { Component } from 'react';
import '../css/Navbar.css';
import profile from '../image/Rmclogo.jpg';
import BrowserHistory from '../utils/BrowserHistory'

class Navbar extends Component {
  onHandleClick(){
    BrowserHistory.push('/Register')
  }
  onChange(){
    BrowserHistory.push('/LoginForm')
  }
  render() {
      return (
        <div >
          <nav className="nav">
        <img src={profile} className="navlogo"/>
        <a className="heading">Online Rmc Service</a>
        <a className="home" href='/'>Home</a>
        <a className="home" href='/'>RMC Details</a>
        <a className="Register"onClick={this.onHandleClick}>Register</a>
        <a className="Login"onClick={this.onChange}>Login</a>
        <a className="Order" href='/'>Order</a>
        </nav>
      </div>
        );
    }
}

export default Navbar;
  