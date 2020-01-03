import React, { Component } from 'react';
import '../css/Register.css';
import logo from '../image/Rmclogo.jpg';

class Register extends Component {
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
  
        if (!fields["Firstname"]) {
                  formIsValid = false;
                  errors["Firstname"] = "*Please enter your Firstname.";
                }
          
                if (typeof fields["Firstname"] !== "undefined") {
                  if (!fields["Firstname"].match(/^[a-zA-Z ]*$/)) {
                    formIsValid = false;
                    errors["Firstname"] = "*Please enter alphabet characters only.";
                  }
                }
                if (!fields["Lastname"]) {
                  formIsValid = false;
                  errors["Lastname"] = "*Please enter your Lastname.";
                }
          
                if (typeof fields["Lastname"] !== "undefined") {
                  if (!fields["Lastname"].match(/^[a-zA-Z ]*$/)) {
                    formIsValid = false;
                    errors["Lastname"] = "*Please enter alphabet characters only.";
                  }
                }
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
          
          
                if (!fields["emailid"]) {
                  formIsValid = false;
                  errors["emailid"] = "*Please enter your email-ID.";
                }
          
                if (typeof fields["emailid"] !== "undefined") {
                 
                  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                  if (!pattern.test(fields["emailid"])) {
                    formIsValid = false;
                    errors["emailid"] = "*Please enter valid email-ID.";
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
       <h3>Registration page</h3>
     
        
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>FirstName</label>
       <input type="text" name="Firstname" value={this.state.fields.username} onChange={this.handleChange} />
         <p className="errorMsg">{this.state.errors.Firstname}</p>

        <label>LastName</label>
        <input type="text" name="Lastname" value={this.state.fields.Lastname} onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors.Lastname}</div>
        <label>Email ID:</label>
         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
         <div className="errorMsg">{this.state.errors.emailid}</div>
         <label>Mobile No:</label>
         <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
         <div className="errorMsg">{this.state.errors.mobileno}</div>
         <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
         <button type="submit" className="button"  value="Register">register</button>
         </form>
      </div>
  </div>
  
        );
    }
  
  
  }

export default Register;