import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Register.css';
import BrowserHistory from '../utils/BrowserHistory';
import Navbar from './Navbar';
import Footer from './Footer';
import { registerHandle } from '../Action/signupAction';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      Lastname: '',
      email: '',
      password: '',
      Confirmpassword: '',
      Mobnum: '',
      role: 'user',
      ferr: '',
      lerr: '',
      uerr: '',
      perr: '',
      cperr: '',
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
    BrowserHistory.push('/register');
  }
  onHandleClick = (e) => {
    debugger;
    e.preventDefault();
    const payload = {

      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      email: this.state.email,
      password: this.state.password,
      Confirmpassword: this.state.Confirmpassword,
      Mobnum: this.state.Mobnum,
      role: this.state.role


    }
    if (this.state.Firstname.length === 0 && this.state.Lastname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0 && this.state.Confirmpassword.length === 0 && this.state.Mobnum.length === 0) {
      this.setState({
        ferr: "Firstname is required",
        lerr: "Lastname is required",
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
      this.setState({ perr: "Password is required" })
    }
    else if (this.state.Confirmpassword.length === 0) {
      this.setState({ Cperr: "Password is required" })
    }
    else if (this.state.Mobnum.length === 0) {
      this.setState({ phnerr: "Password is required" })
    }

    else if (!this.state.Firstname.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ ferr: "Please enter the valid fname" })
    }
    else if (!this.state.Lastname.match(/^[A-Za-z]{5,15}$/)) {
      this.setState({ lerr: "Please enter the valid lname" })
    }
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ uerr: "Please enter the valid email" })
    }
    else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ perr: "Please enter the valid password" })
    }
    else if (!this.state.Confirmpassword.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
      this.setState({ cperr: "Please enter the valid password" })
    }
    else if (!this.state.Mobnum.match(/^[0-9]{10}$/)) {
      this.setState({ phnerr: "Please enter the valid number" })
    } else
      this.props.registerHandle(payload);
  }
  render() {
    return (
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4 frm">

              <div className="regcontnt">
                <div className="firstname"><span><label ><b >First Name</b></label></span><br /></div>
                <div><input type="text" name="Firstname" className="one" onChange={this.onHandleChange} placeholder="enter your first name" /><br /></div>
                <div><p >{this.state.ferr}</p></div>
                <div className="firstname"><label><b>Last Name</b></label><br /></div>
                <div><input type="text" name="Lastname" className="one" onChange={this.onHandleChange} placeholder="enter your last name" /><br /></div>
                <div> <p >{this.state.lerr}</p></div>
                <div className="firstname"><label ><b>Email</b></label><br /></div>
                <div> <input type="text" name="email" className="one" onChange={this.onHandleChange} placeholder="enter email" /><br /></div>
                <div> <p >{this.state.uerr}</p></div>
                <div className="firstname"><label ><b>Password</b></label></div>
                <div> <input type="password" name="password" className="one" onChange={this.onHandleChange} placeholder="enter password" /><br /><br /></div>
                <div> <p >{this.state.perr}</p></div>
                <div className="firstname"> <label ><b>Mobile Number</b></label></div>
                <div> <input type="text" name="Mobnum" className="one" onChange={this.onHandleChange} placeholder="enter mobile number" /><br /><br /></div>
                <p >{this.state.phnerr}</p>
                <div>
                  <div className="firstname"><label className="name2" ><b>role :</b></label></div>
                  <select  className="drap_down"name="role" onChange={this.onHandleChange}>
                    <option >user</option>
                    <option>admin</option>
                  </select>
                </div><br />
                <button onClick={this.onHandleClick} className="btn1"><b>Register</b></button><a className="btn2" href="" onClick={this.onHandleClicksCancel}>Cancel</a>
                <div><div href="" onClick={this.onHandleClicks} className="next_login">you have already account ?</div></div>
              </div>
              <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              </div>
            </div>

          </div>
        </div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { Firstname, Lastname, email, password, Confirmpassword, Mobnum, role } = state.RegisterReducer
  return { Firstname, Lastname, email, password, Confirmpassword, Mobnum, role }
}
export default connect(mapStateToProps, { registerHandle })(Register);

