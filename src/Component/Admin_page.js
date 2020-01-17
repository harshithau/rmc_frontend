import React, { Component } from 'react';
import '../css/Admin_page.css';
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
const { volunteerName,marketId} = this.state
const payload = {volunteerName,marketId}

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
        <div className="credentials">Note: *Admin can add the volunteers</div>
        <div>
          <form onSubmit={this.handleSubmit} className='signup_form'> 
           <div className="register_volunteer">
            <input type='text' name='volunteerName' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter volunteer Name'></input>
            <p className='red'>{this.state.fnameError}</p>
            <input type='text' name='marketId' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter  market id'></input>
            <p className='red'>{this.state.lnameError}</p>
            <button type="button" onClick={this.handleSubmit} class=" btn btn-success " class="donatebtn btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Add</button>
            <button class="donatebtn btn btn-success " color="danger" onClick={this.toggle}>Cancel</button>
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