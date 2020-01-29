import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Register.css';
import '../css/Login.css';
import Modal from 'react-modal';
import BrowserHistory from '../utils/BrowserHistory';
import Navbar from './Navbar';
import Footer from './Footer';
import {loginHandle} from '../Action/LoginFormAction';
import Forgetpassword from './Forgetpassword';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     password: '',
      email: '',
      perr: '',
      phnerr: '',
      modalIsOpen: false
    };
  }
  
openModal=()=> {
  sessionStorage.setItem('change',this.state.email)
  this.setState({modalIsOpen: true});
  }
  closeModal=()=> {
  this.setState({modalIsOpen: false});
  }
  
  
  onHandleChange = (event) => {
     this.setState({ [event.target.name]: event.target.value });
  }
//   onConfirm=(e)=>{
//     sessionStorage.setItem('change',this.state.email)
//     BrowserHistory.push('/confirmmail');
// }
  onHandleClicks = (e) => {
    BrowserHistory.push('/register'); 
 }
  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const payload = {
      password: this.state.password,
      email: this.state.email
    }
    
   
  if (this.state.password.length === 0 && this.state.email.length === 0) {
      this.setState({
      perr: "Password is required",
      phnerr: "email is required"
      })
    }
    else if (this.state.password.length === 0) {
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.email.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
   else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
      this.setState({ phnerr: "Please enter the Valid email" })
    }
    this.props.loginHandle(payload);
  }
  render() {
    return (
      <div className="register">
        <h3>Login here</h3>
        <div class="container_login">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
            <form>
            <label ><b>Email </b></label>
            <div> <input type="text" name="email" className="one" placeholder="enter your register email"  onChange={this.onHandleChange} /></div> 
            <p >{this.state.phnerr}</p>
            <label ><b>Password</b></label>
            <div><input type="password" name="password" className="one"  placeholder="enter your register password"onChange={this.onHandleChange} /><br /><br /></div>
            <div> <p >{this.state.perr}</p></div>
          
            <div>
              <div><button onClick={this.onHandleClick} className="btn1"><b>Login</b></button>
           <a href=""  className="btn2" onClick={this.onHandleClicksCancel}>Cancel</a></div>
           <div className="login_back"><a href="" onClick={this.onHandleClicks}  >you  have to register</a></div>
           <div><a onClick={this.openModal} className="forgetpassword">Forget Password?</a><div></div></div>
            </div>
            </form>
            </div>
           </div>
        </div>
            <Modal className="modalbody"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Register Modal"
                >
          <Forgetpassword/>
            </Modal>
       <Navbar/>
       <Footer/>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  const {password,email }=state.LoginFormReducer
  return {password,email }
}
export default connect(mapStateToProps,{loginHandle})  (LoginForm);

