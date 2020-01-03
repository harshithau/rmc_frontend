import React, { Component } from 'react';
import '../css/Register.css';
import logo from '../image/Rmclogo.jpg';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["Firstname"] = "";
          fields["Lastname"] = "";
          fields["password"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
      
                if (!fields["password"]) {
                  formIsValid = false;
                  errors["password"] = "*Please enter your password.";
                }
          
                if (typeof fields["password"] !== "undefined") {
                  if (!fields["password"].match(/^.*(?=.{8,}).*$/)) {
                    formIsValid = false;
                    errors["password"] = "*Please enter secure and strong password.";
                  }
                }
          
          
               
          
                if (!fields["mobileno"]) {
                  formIsValid = false;
                  errors["mobileno"] = "*Please enter your mobile no.";
                }
          
                if (typeof fields["mobileno"] !== "undefined") {
                  if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                    formIsValid = false;
                    errors["mobileno"] = "*Please enter valid mobile no.";
                  }
                }
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
     
  
  
    render() {
      return (
      <div id="main-registration-container">
       <div id="register"> 
       <img src={logo} className="imgi" />
       <h3>Login Form</h3>
     
        
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        
         <label>Mobile No:</label>
         <input type="number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
         <div className="errorMsg">{this.state.errors.mobileno}</div>
         <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
         <button type="submit" className="button"  value="Register">Login</button>
         </form>
      </div>
  </div>
  
        );
    }
  
  
  }

export default LoginForm;