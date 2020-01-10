import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Register.css';
import BrowserHistory from '../utils/BrowserHistory'
// import { handle } from '../Action/Registeraction'
// import { success } from '../'
import { signup } from  './userFunction';
import Navbar from './Navbar';
import Footer from './Footer';

class Registrationfrom extends Component {
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
  onHandleClicks = (e) => {
   
        BrowserHistory.push('/login'); 

  }
  onHandleClicksCancel = (e) => {
   
    BrowserHistory.push('/LoginForm'); 

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
      // if (res.data === "User Created Succesfully") {
      //   alert("UserCreated Successfully")
      //   BrowserHistory.push('/login')
      // }

    })

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

    else {
      BrowserHistory.push('/LoginForm')
      // this.Loginaction.props.success("Register Successfully")
    }
  }


  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <h1>Signup</h1>

          
             

            
              <label ><b>Password</b></label><br />
              <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br />
              <p >{this.state.perr}</p>
             
              <label ><b>Mobilenumber</b></label><br />
              <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br /><br />
            
              <p >{this.state.phnerr}</p>
              <button onClick={this.onHandleClick} className="btn1"><b>Login</b></button><a href="" onClick={this.onHandleClicksCancel}>Cancel</a>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
            </div>
          </div>
        </div>
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}
// const mapStoreToProps = (state) => {
//   const { message } = state.Registerreducer;


//   return { message };

export default Registrationfrom;