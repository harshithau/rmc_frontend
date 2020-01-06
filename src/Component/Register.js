import React, { Component } from 'react';
import '../css/Register.css';
import logo from '../image/Rmclogo.jpg';
import singupAction from '../Action/signupAction';
import {signup} from './userBackendFun';

class Register extends Component {
    constructor() {
        super();
        this.state = {
          Firstname: '',
          Lastname: '',
          email: '',
          password: '',
          Confirmpassword: '',
          Mobnum: '',
          ferr: '',
          lerr: '',
          uerr: '',
          perr: '',
          cperr: '',
          phnerr: '',
          
          
          };
          }
  
        
onHandleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
       
  
      }
      onHandleClick = (e) => {
        debugger;
        e.preventDefault();
        const reqst = {
        Firstname: this.state.Firstname,
        Lastname: this.state.Lastname,
        email: this.state.email,
        password: this.state.password,
        Confirmpassword: this.state.Confirmpassword,
        Mobnum: this.state.Mobnum
        
        }
        signup(reqst).then(res => {
        if (res.data === "User Created Succesfully") {
        alert("UserCreated Successfully")
        // BrowserHistory.push('/login')
        }
        
        })
        
        if (this.state.Firstname.length === 0 && this.state.Lastname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
        this.setState({
        ferr: "Firstname is required", lerr: "Lastname is required",
        uerr: "Email is required",
        perr: "Password is required",
        cperr: "ConrimPassword is required",
        phnerr: "Phonumber is required"
        
        })
        }
        else if (this.state.Firstname.length === 0) {
        this.setState({ ferr: "Firstname is required" })
        }
        else if (this.state.Lastname.length === 0) {
        this.setState({ lerr: "Lastname is required" })
        }
        else if (this.state.email.length === 0) {
        this.setState({ uerr: "Username is required" })
        }
        else if (this.state.password.length === 0) {
        this.setState({ perr: "password is required" })
        }
        else if (this.state.Confirmpassword.length === 0) {
        // this.setState({ cperr: "Password is required" })
        }
        else if (this.state.Mobnum.length === 0) {
        this.setState({ phnerr: "Password is required" })
        }
        
        else if (this.state.Firstname.match(/^[A-Za-z]{5}$/)) {
        this.setState({ ferr: "Please enter the valid fname" })
        }
        
        else if (this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
        this.setState({ perr: "Please enter the valid password" })
        }
        else if (this.state.Confirmpassword.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
        this.setState({ cperr: "Please enter the valid password" })
        }
        else if (this.state.Mobnum .match(/^[0-9]{9}$/)) {
        this.setState({ phnerr: "Please enter the valid number" })
        }
        
      }

  
     
  
  
    render() {
      return (
      <div id="main-registration-container">
       <div id="register"> 
       <img src={logo} className="imgi" />
       <h3>Registration page</h3>
     
        
          <form method="post"  name="userRegistrationForm"   >
        <label>FirstName</label>
       <input type="text" name="Firstname" value={this.state.username} onChange={this.onHandleChange} />
         <p className="errorMsg">{this.state.ferr}</p>

        <label>LastName</label>
        <input type="text" name="Lastname" value={this.state.Lastname} onChange={this.onHandleChange} />
         <div className="errorMsg">{this.state.lerr}</div>
        <label>Email ID:</label>
         <input type="text" name="email" value={this.state.email} onChange={this.onHandleChange}  />
         <div className="errorMsg">{this.state.uerr}</div>
        
         <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.onHandleChange} />
        <div className="errorMsg">{this.state.perr}</div>
        <label>confirmPassword</label>
        <input type="password" name="Confirmpassword" value={this.state.Confirmpassword} onChange={this.onHandleChange} />
        <div className="errorMsg">{this.state.cperr}</div>
        <label>Mobile No:</label>
         <input type="text" name="Mobnum" value={this.state.Mobnum} onChange={this.onHandleChange}   />
         <div className="errorMsg">{this.state.phnerr}</div>
         <button type="submit" className="button"  value="Register" onClick={this.onHandleClick}>register</button>
         </form>
      </div>
  </div>
  
        );
    }
  
  
  }

export default Register;