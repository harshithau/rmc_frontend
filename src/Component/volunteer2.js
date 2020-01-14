import React, { Component } from 'react';
import '../css/volunteer1.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { productsDetails } from '../Action/Admin_action';
import modal from 'react-modal';
import Navbar from './Navbar';
import Footer from './Footer';


class Volunteer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteersId: '',
            productName: '',
            productWeight: '',
            Amount: '',
            data: []
        }
    }
    componentDidMount = () => {
        debugger;
        axios.get('http://localhost:4013/getallProductDetails')
            .then(res => {
                this.setState({ data: res.data });
                console.log(res)
            });
    }
    handleSubmit = () => {
        debugger;
        const { volunteersId, productName, productWeight, Amount } = this.state
        const payload1 = { volunteersId, productName, productWeight, Amount }
      let t = 0;
        if (!this.state.volunteersId) this.setState({ volunteeridError: 'Firstname is required' });
        if (!this.state.productName) this.setState({ productnameError: 'productname is required' });
        if (!this.state.productWeight) this.setState({ productWeightError: 'productWeight is required' });
        if (!this.state.Amount) this.setState({ AmountError: 'Amount is required' });
        this.props.productsDetails(payload1);
    }
  handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
               <div className="register_volunteers">
                    <form className="Volunteers_form">
                        <div className="Volunteer_Details">Volunteer Details</div><br></br>
                        <input type='text' name='volunteersId' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter Volunteer Id'></input>
                        <p className='red'>{this.state.volunteeridError}</p>
                        <input type='text' name='productName' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter product name'></input>
                        <p className='red'>{this.state.productnameError}</p>
                        <input type='text' name='productWeight' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter product Weight'></input>
                        <p className='red'>{this.state.productWeightError}</p>
                        <input type="number" name="Amount" onChange={this.handleChange} className="inputtran input_box  " placeholder="enter  amount"></input>
                        <p className='red'>{this.state.AmountError}</p>
                        <button type="button" onClick={this.handleSubmit} class="donatebtn btn btn-success signup_btn">Add</button>
                        <button class="donatebtn btn btn-success signup_btn" color="danger" onClick={this.toggle}>Cancel</button>
                   </form>
                 </div>
                <div>
                  <div className="main_container_table">
                    <div>
                        <table >
                            <tr>
                              <div className="product_heading1">
                                <div className="product_heading"><th >productname </th></div>
                                <div className="product_heading2"><th>product weight</th></div>
                                <div className="product_heading3"> <th>amount</th></div>
                                </div>
                            </tr>
                        </table>
                    </div>

                    {this.state.data.map(name => {
                        if (name.volunteersId === "5e1c430223a839455334b4a1") {
                            return (
                                <div>
                                    <table>
                                        <tr>
                                            <div className="product_card" >
                                            <div className="product_card1"><td>{name.productName}</td></div>
                                            <div className="product_card2"><td>{name.productWeight}</td></div>
                                            <div className="product_card3"><td>{name.Amount}</td></div>
                                            </div>
                                        </tr>
                                    </table><br></br>
                                  </div>
                               )

                        }
                    })}</div>
                    </div>
                    <Navbar/>
                    <Footer/>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    const { volunteersId, productName, productWeight, Amount } = state.Admin_reducer
    return { volunteersId, productName, productWeight, Amount }
}
export default connect(mapStateToProps, { productsDetails })(Volunteer2);




