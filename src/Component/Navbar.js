import React, { Component } from 'react';
import '../css/Navbar.css';
import profile from '../image/Rmclogo.jpg';

class Navbar extends Component {
  render() {
      return (
        <div >
          <nav className="nav">
        <img src={profile} className="navlogo"/>
        <a className="heading">Online Rmc Service</a>
        <a className="home" href='/'>Home</a>
        <a className="home" href='/'>RMC Details</a>
        <a className="Register" href='/'>Register</a>
        <a className="Login" href='/'>Login</a>
        <a className="Order" href='/'>Order</a>
        </nav>
      </div>
        );
    }
}

export default Navbar;
  