import React, { Component } from 'react';
// import NavComponents from '../Components/NavComponents';
// import browserHistory from '../Utlis/browserHistory';
import '../css/Admin_page.css';
// import card1 from '../images/paypal.png';
// import card2 from '../images/mastercard.png';
// import card3 from '../images/Gold_Card.png';
// import card4 from '../images/discover.png';
import { connect } from 'react-redux';
import {volunteersHandle} from '../Action/Admin_action';
import modal from 'react-modal';


class Admin_page extends Component {
  constructor(props){
    super(props);
    this.state={
      volunteerName:'',
      marketId:'',
      vnameError:'',
      marketidError:''
      
      }
      }
     



     
        
       
      
    handleSubmit = () => {
      debugger;
    const { volunteerName,marketId} = this.state
    const payload = {volunteerName,marketId}
    
   
    let t=0;
    if(!this.state.volunteerName) this.setState({vnameError:'Firstname is required'});

    
    if(!this.state.marketId) this.setState({marketidError:'market id is required'});
   
    this.props.volunteersHandle(payload);

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
            
           
          
          </div>
          </div>
          
          </div>
         
  );
}
}
const mapStateToProps=(state)=>{
  const {volunteerName,marketId,}=state.Admin_reducer;
  return {volunteerName,marketId,}
}
export default connect(mapStateToProps,{volunteersHandle})  (Admin_page);