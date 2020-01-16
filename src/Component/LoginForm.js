import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Register.css';
import '../css/Login.css';
import BrowserHistory from '../utils/BrowserHistory';
import Navbar from './Navbar';
import Footer from './Footer';
import {loginHandle} from '../Action/LoginFormAction';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     password: '',
      Mobnum: '',
      perr: '',
      phnerr: ''
    };
  }
  onHandleChange = (event) => {
     this.setState({ [event.target.name]: event.target.value });
  }
  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const payload = {
      password: this.state.password,
      Mobnum: this.state.Mobnum
    }
  if ( this.state.password.length === 0 && this.state.Mobnum.length === 0) {
      this.setState({
      perr: "Password is required",
      phnerr: "Phonumber is required"
      })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.Mobnum.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
   else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
      this.setState({ phnerr: "Please enter the valid number" })
    }
    this.props.loginHandle(payload);
  }
  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <form>
            <h3>Login here</h3>
            <label ><b>Mobile Number</b></label>
            <div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /></div> 
            <p >{this.state.phnerr}</p>
            <label ><b>Password</b></label>
            <div><input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
            <div> <p >{this.state.perr}</p></div>
            <button onClick={this.onHandleClick} className="btn1"><b>Login</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
            </form>
            </div>
           
          </div>
        </div>
       <Navbar/>
       <Footer/>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  const {password,Mobnum }=state.RegisterReducer
  return {password,Mobnum }
}
export default connect(mapStateToProps,{loginHandle})  (LoginForm);

