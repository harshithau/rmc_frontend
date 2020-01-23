import React, { Component } from 'react';
import '../css/Navbar.css';
import profile from '../image/Rmclogo.jpg';
import BrowserHistory from '../utils/BrowserHistory'

class Navbar extends Component {
  state={
    visible:false
  }
  logout =()=>{
    sessionStorage.removeItem('authentication',"")
    sessionStorage.removeItem('role',"")
    this.setState({visible: false})
    BrowserHistory.push('/')
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
    BrowserHistory.push('/')
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
             <a hidden={this.state.visible} href="/Admin" className="admin">Admin</a>
          <a className="Register"onClick={this.onHandleClick}>Register</a>
          <a className="Login"onClick={this.onChange}>Login</a>
          <a className="logOut"  onClick={this.logout}>Log Out</a>
        </nav>
      </div>
        );
    }
}

export default Navbar;
  