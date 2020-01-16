import React, { Component } from 'react';
import logo from '../image/user4.jpg';
import axios from 'axios';
import '../css/user_only.css';
import tomato from '../image/tomato.jpeg';  
import carrot from '../image/slid2.jpg'; 
import cauliflower from '../image/user2.jpeg'; 
import beetroot from '../image/beetroot.jpg';
import beans from '../image/beans.jpg';
import brinjal from '../image/brinjal.jpg';
import capsicum from '../image/capsicum.jpg';
import ladysfinger from '../image/ladysfinger.jpg';
import Footer from './Footer';
import  Navbar  from './Navbar';

class user_only extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    render(){
        return (
             <div>
         <div className="user_card">
             <div  className="card_border">
             <img className="product_images" src={carrot}/>
        {this.state.data.map(name => {
        if (name.productName === "carrot") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={beetroot}/>
        {this.state.data.map(name => {
        if (name.productName === "beetroot") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={brinjal}/>
        {this.state.data.map(name => {
        if (name.productName === "brinjal") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={beans}/>
        {this.state.data.map(name => {
        if (name.productName === "Beans") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={cauliflower}/>
        {this.state.data.map(name => {
        if (name.productName === "cauliflower") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={logo}/>
        {this.state.data.map(name => {
        if (name.productName === "onion") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
       <div  className="card_border">
             <img className="product_images" src={tomato}/>
        {this.state.data.map(name => {
        if (name.productName === "tomato") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
        <div  className="card_border">
             <img className="product_images" src={capsicum}/>
        {this.state.data.map(name => {
        if (name.productName === "capsicum") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>

            )}
         }
       )}</div>
        <div  className="card_border">
             <img className="product_images" src={ladysfinger}/>
        {this.state.data.map(name => {
        if (name.productName === "lady'sfinger") {
          return(
                <div>
                    <div className="product_fontclr">
                         <div ><td>PRODUCT NAME:{name.productName}</td></div>
                        <div><td>PRODUCT WEIGHT:{name.productWeight}</td></div>
                        <div ><td>AMOUNT:{name.Amount}</td></div>
                        <button className="Buying_button">Buy</button><hr></hr>
                    </div>
                 </div>
                 )}
                }
               )}</div>
               
          </div>
          <Navbar/>
               <Footer/>
               </div>
          )
      }
 }


export default user_only;           




