import React, { Component } from 'react';
// import NavComponents from '../Components/NavComponents';
// import browserHistory from '../Utlis/browserHistory';
import '../css/Admin_page.css';
// import card1 from '../images/paypal.png';
// import card2 from '../images/mastercard.png';
// import card3 from '../images/Gold_Card.png';
// import card4 from '../images/discover.png';
import { connect } from 'react-redux';
import {adminHandle} from '../Action/Admin_action';

class Admin_page extends Component {
  constructor(props){
    super(props);
    this.state={
    Firstname:'',
      Lastname:'',
      email:'',
      product:'Beans',
      fnameError:'',
      lnameError:'',
      emailError:''
      }
      }
    handleSubmit = () => {
    const { Firstname,Lastname,email,product} = this.state
    const payload = {Firstname,Lastname,email,product}
    
    let reg_user=/^[A-Za-z0-9]{2,10}$/;
    let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let t=0;
    if(!this.state.Firstname) this.setState({fnameError:'Firstname is required'});
    else if(!reg_user.test(this.state.Firstname)) this.setState({fnameError:'Invalid Firstname'});
    else{
    t++;
    this.setState({fnameError:''});
    }
    
    if(!this.state.Lastname) this.setState({lnameError:'Lastname is required'});
    else if(!reg_user.test(this.state.Lastname)) this.setState({lnameError:'Invalid Lastname'}); 
    else {
    t++;
    this.setState({lnameError:''});
    }
    if(!this.state.email) this.setState({emailError:'Email is required'});
    else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
    else {
    t++;
    this.setState({emailError:''});
    }
    if(t>2) {
      this.props.adminHandle(payload);
    } 
  }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    
  render() {
    return (
      <div>
       
       
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
            <div className="credentials">Note: *Volunteers can add the item to  RMC</div>
          <div>
            <form onSubmit={this.handleSubmit} className='signup_form'> 
             
            <div className="register">
              <input type='text' name='Firstname' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter First Name'></input>
              <p className='red'>{this.state.fnameError}</p>
      
              <input type='text' name='Lastname' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter Last Name'></input>
              <p className='red'>{this.state.lnameError}</p>

              <input type='text' name='email' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter Email'></input>
              <p className='red'>{this.state.emailError}</p>
            <div className="option_product">
              <h6>select the product u wish to add for rmc</h6>
              
              <select name="product" onChange={this.handleChange} >
                <option value="Beans" className="Diff_product">Beans</option>
                <option value="Carrot">Carrot</option>
                <option value="Beetroot">Beetroot</option>
              </select>
            </div>
            
              <button type="button" onClick={this.handleSubmit} class="donatebtn btn btn-success signup_btn">Add</button>
              <button class="donatebtn btn btn-success signup_btn" color="danger" onClick={this.toggle}>Cancel</button>
            </div>
            <div>
             
            </div>
            </form>
          </div>
          </div>
          
          </div>
         
  );
}
}
const mapStateToProps=(state)=>{
  const {Firstname,Lastname,email,product}=state.Admin_reducer
  return {Firstname,Lastname,email,product}
}
export default connect(mapStateToProps,{adminHandle})  (Admin_page);