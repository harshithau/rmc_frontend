import React, { Component } from 'react';
// import NavComponents from '../Components/NavComponents';
// import browserHistory from '../Utlis/browserHistory';
import '../css/Admin_page.css';
import axios from 'axios';
// import card1 from '../images/paypal.png';
// import card2 from '../images/mastercard.png';
// import card3 from '../images/Gold_Card.png';
// import card4 from '../images/discover.png';
import { connect } from 'react-redux';
import {productsDetails} from '../Action/Admin_action';
import modal from 'react-modal';


class Volunteer1 extends Component {
  constructor(props){
    super(props);
    this.state={
        volunteersId:'',
        productName:'',
        productWeight:'',
        Amount:'',
       marketidError:'',
       data:''
      
      }
      }
      componentDidMount=()=>{
        debugger;
          axios.get('http://localhost:4013/allproducts')
          .then(res => {
              this.setState({data:res.data});
              console.log(res)
          });
      }
    handleSubmit = () => {
      debugger;
    const { volunteersId,productName,productWeight,Amount} = this.state
    const payload1 = { volunteersId,productName,productWeight,Amount}
    
   
    let t=0;
    if(!this.state.volunteersId) this.setState({vnameError:'Firstname is required'});

    
    if(!this.state.marketId) this.setState({marketidError:'market id is required'});
   
    this.props.productsDetails(payload1);

  }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    
  render() {
    return (
      <div>
       
       
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
            <div className="credentials">VOLUNTEER DETAILS</div>
          <div>
            <form onSubmit={this.handleSubmit} className='signup_form'> 
             
            <div className="register">
              <input type='text' name='volunteersId' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter volunteer Name'></input>
              <p className='red'>{this.state.fnameError}</p>
              <input type='text' name='volunteerName' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter volunteer Name'></input>
              <p className='red'>{this.state.fnameError}</p>
      
              <input type='text' name='marketId' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter  market id'></input>
              <p className='red'>{this.state.lnameError}</p>

             
          
              <button type="button" onClick={this.handleSubmit} class="donatebtn btn btn-success signup_btn" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Add</button>
              <button class="donatebtn btn btn-success signup_btn" color="danger" onClick={this.toggle}>Cancel</button>
            </div>
            <div>
             
            </div>
            </form>
            <div>
            

{this.state.Users.map(name => {
    if (name.volunteersId === "5e1c42df23a839455334b4a0") {
        return (
            <div>
                        <h6>PoductName:{name.productName}</h6>
                        <p>ProductWeight:{name.productWeight}</p>
                        <p>Amount:{name.Amount}</p>
                        
                        </div>
                   )
                  
        }  
})}
            </div>
            
           
          
          </div>
          </div>
          
          </div>
         
  );
}
}
const mapStateToProps=(state)=>{
  const {volunteersId,productName,productWeight,Amount}=state.Admin_reducer
  return {volunteersId,productName,productWeight,Amount}
}
export default connect(mapStateToProps,{productsDetails})  (Volunteer1);