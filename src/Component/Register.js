

import logo from '../image/Rmclogo.jpg';
import {signup} from './userBackendFun';
import Navbar from './Navbar';
import Footer from './Footer';

import React, { Component } from "react";    
   
    
class Register extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
          Firstname: '', 
            Lastname:'',
            password:'',
            Confirmpassword:'',   
            email: '',   
            Mobnum: '',    
              
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {
      debugger;    
        const  { Firstname,Lastname, password, Confirmpassword,email, Mobnum } = this.state;   
        const reqst={Firstname,Lastname, password, Confirmpassword,email, Mobnum} 
        signup(reqst).then(res=>{
          console.log(res.data);
        })
        let formErrors = {};    
        let formIsValid = true;  
          
        
        if (!Firstname) {    
          formIsValid = false;    
          formErrors["fNameErr"] = "Name is required.";    
      }  
      
    if (!Lastname) {    
      formIsValid = false;    
      formErrors["lNameErr"] = "Name is required.";    
  }   
  if (!password) {    
    formIsValid = false;    
    formErrors["pwdErr"] = "password is required.";    
}  
if (!Confirmpassword) {    
  formIsValid = false;    
  formErrors["cpwdErr"] = "confirmPassword is required.";    
}  
    
        
        if (!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailErr"] = "Invalid email id.";    
        }    
        if (!Mobnum) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^[0-9]{10}$/ ;    
            if (!mobPattern.test(Mobnum)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }  
        if (!password) {    
          formIsValid = false;    
          formErrors["pwdErr"] = "Phone number is required.";    
      }    
      else {    
          var pwdPattern = /^.*(?=.{8,}).*$/ ;   
          if (!pwdPattern.test(password)) {    
              formIsValid = false;    
              formErrors["pwdErr"] = "Invalid phone number.";    
          }    
      }  
      if (!Confirmpassword) {    
        formIsValid = false;    
        formErrors["cpwdErr"] = "Phone number is required.";    
    }    
    else {    
        var cpwdPattern = /^.*(?=.{8,}).*$/;    
        if (!cpwdPattern.test(Confirmpassword)) {    
            formIsValid = false;    
            formErrors["cpwdErr"] = "Invalid phone number.";    
        }    
    }    
    
       
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { fNameErr,lNameErr,pwdErr,cpwdErr, emailErr,  phoneNumberErr, cityErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Admission Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="Firstname">FirstName</label>    
                            <input type="text" name="Firstname"    
                                value={this.state.Firstname}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={fNameErr ? ' showError' : ''} />    
                            {fNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{fNameErr}</div>    
                            }    
    
                        </div>   
                        <div>    
                            <label htmlFor="Lastname">LastName</label>    
                            <input type="text" name="Lastname"    
                                value={this.state.Lastname}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={lNameErr ? ' showError' : ''} />    
                            {lNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{lNameErr}</div>    
                            }    
    
                        </div>  
                        <div>    
                            <label htmlFor="password">password</label>    
                            <input type="password" name="password"    
                                value={this.state.password}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={pwdErr ? ' showError' : ''} />    
                            {pwdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{pwdErr}</div>    
                            }    
    
                        </div> 
                        <div>    
                            <label htmlFor="Confirmpassword">Confirmpassword</label>    
                            <input type="password" name="Confirmpassword"    
                                value={this.state.Confirmpassword}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={cpwdErr ? ' showError' : ''} />    
                            {cpwdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cpwdErr}</div>    
                            }  
                        </div>  
                        <div>    
                            <label htmlFor="email">Email Id</label>    
                            <input type="text" name="email"    
                                value={this.state.email}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailErr ? ' showError' : ''} />    
                            {emailErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>    
                            }    
    
                        </div>    
                        
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="Mobnum"    
                                onChange={this.handleChange}    
                                value={this.state.Mobnum}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                      
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Register;

