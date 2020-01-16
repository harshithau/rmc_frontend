import React, { Component } from 'react';
import '../css/Navbar.css';
import profile from '../image/Rmclogo.jpg';
import BrowserHistory from '../utils/BrowserHistory'

class Navbar extends Component {
  state={
    visible:false
  }
  componentDidMount=()=>{
    sessionStorage.getItem('role')=='admin' ? this.setState({visible: false}) : this.setState({visible: true})
  }
  onHandleClick(){
    BrowserHistory.push('/Register')
  }
  onChange(){
    BrowserHistory.push('/login')
  }
  onHome(){
    BrowserHistory.push('/Home')
  }
  onUser(){
    BrowserHistory.push('/login')

  }
  render() {
      return (
        <div >
          <nav className="navbar">
            <img src={profile} className="navlogo"/>
            <a className="heading">Online Rmc Service</a>
            <a className="home"  onClick={this.onHome}>Home</a>
            <div class="dropdown">
              <button class="dropbtn ">RMC Details</button>
              <div class="dropdown-content">
              <a  onClick={this.onUser}>Admin</a> </div>
            </div> 
             <a hidden={this.state.visible} href="/Admin"><button className="logOut">Admin</button></a>
          <a className="Register"onClick={this.onHandleClick}>Register</a>
          <a className="Login"onClick={this.onChange}>Login</a>
          <a className="Order" href='/'>Order</a>
        </nav>
      </div>
        );
    }
}

export default Navbar;
  