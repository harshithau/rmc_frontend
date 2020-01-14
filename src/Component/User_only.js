import React, { Component } from 'react';
import logo from '../image/user4.jpg';
import axios from 'axios';
import '../css/user_only.css';
    
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
         <img className="product_images" src={logo}/>
       {this.state.data.map(name => {
        if (name.productName === "carrot") {
          return(
                <div>
                    <div>
                     
                        <div ><td>{name.productName}</td></div>
                        <div><td>{name.productWeight}</td></div>
                        <div ><td>{name.Amount}</td></div>
                    </div>
                 </div>

            )}
         }
       )}
                <img className="product_images" src={logo}/>
       {this.state.data.map(name => {
        if (name.productName === "onion") {
          return(
                <div>
                    <div>
                     
                        <div ><td>{name.productName}</td></div>
                        <div><td>{name.productWeight}</td></div>
                        <div ><td>{name.Amount}</td></div>
                    </div>
                 </div>

            )}
         }
       )}
                <img className="product_images" src={logo}/>
       {this.state.data.map(name => {
        if (name.productName === "carrot") {
          return(
                <div>
                    <div>
                     
                        <div ><td>{name.productName}</td></div>
                        <div><td>{name.productWeight}</td></div>
                        <div ><td>{name.Amount}</td></div>
                    </div>
                 </div>

            )}
         }
       )}</div>
       )
     }
    }


export default user_only;           

