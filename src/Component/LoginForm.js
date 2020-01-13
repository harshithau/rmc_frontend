
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Register.css';
import '../css/Login.css';
import BrowserHistory from '../utils/BrowserHistory'

import Navbar from './Navbar';
import Footer from './Footer';
import {registerHandle} from '../Action/signupAction';


class Register extends Component {
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
   
        BrowserHistory.push('/LoginForm'); 

  }
  onHandleClicksCancel = (e) => {
   
    BrowserHistory.push('/LoginForm'); 

}


  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const payload = {
      
      password: this.state.password,
      
      Mobnum: this.state.Mobnum

    }
    // signup(reqst).then(res => {
      // if (res.data === "User Created Succesfully") {
      //   alert("UserCreated Successfully")
      //   BrowserHistory.push('/login')
      // }

    // })

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
      this.Loginaction.props.success("Register Successfully")
    }
    this.props.registerHandle(payload);
    // BrowserHistory.push('/login')
//     const url = "http://localhost:4013/Signup"
//   return axios({
//   method: 'POST',
//   url,
//   data: reqst
// }).then(async (res) => {
//   console.log(res);
//   BrowserHistory.push('/login')
// })

  }


  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">
              <h1>Signup</h1>
           <div className="regcont">
             

            <h3>Login here</h3>
              <div><label ><b>Password</b></label><br /></div>
              <div> <input type="password" name="password" className="one" onChange={this.onHandleChange} /><br /><br /></div>
              <div> <p >{this.state.perr}</p></div>
         
              <div> <label ><b>Mobilenumber</b></label><br /></div>
              <div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} /><br /><br /></div>
              </div>
              {/* <a href="" onClick={this.onHandleClicks}>you have already account</a> */}
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
const mapStateToProps=(state)=>{
  const {password,Mobnum }=state.RegisterReducer
  return {password,Mobnum }
}
export default connect(mapStateToProps,{registerHandle})  (Register);

