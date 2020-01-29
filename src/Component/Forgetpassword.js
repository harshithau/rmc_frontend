import React, { Component } from 'react';
import axios from 'axios';
import '../css/forgetpassword.css';
import BrowserHistory from '../utils/BrowserHistory';

class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          _id:'',
          password:''
           }
        }

        handlechange=(e)=>{
          debugger
          this.setState({password:e.target.value})
        }
    changepassw = () => {
      debugger
      const payload = {
        email: sessionStorage.getItem('change'),
        password: this.state.password
        }
        const options = {
          url: 'http://localhost:4013/reset',
          method: 'PUT',
          // headers: {
          //   'Accept': 'application/json',
          //   'Content-Type': 'application/json;charset=UTF-8'
          // },
          data: payload
        };
        axios(options)
        .then(response => {
          BrowserHistory.push("/login");
        })
        // console.log(payload)
      
        // axios.put(`http://localhost:4013/reset`,payload)
        //   .then(console.log('update'))
        //   .catch(err => console.log(err))
        // window.location.reload();
      }
  render() {
    return (
            <div className="frgtpassw"><center>
                <label className="new_pass_heading">New Password</label><br/><br/>
                <input type="text" onChange={this.handlechange} className="input_new" placeholder="enter new password"></input><br/><br/>
            <button onClick={this.changepassw} name="password" className="background">change password</button>
            </center> </div>
        )
    }
  }
export default Forgetpassword;

