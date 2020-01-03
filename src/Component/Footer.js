import React, { Component } from 'react';
import '../css/Footer.css';

class navComponents extends Component {
    render() {
        return (
            <div className="footer">
               <div>@Copyright2020</div>
               <div>www.OnlineFoodservice.com</div>
                <div className="social">
                    <i class="fa fa-instagram" ></i>
                    <i class="fa fa-whatsapp" ></i>
                    <i class="fa fa-twitter"></i>   
                    <i class="fa fa-facebook-f" ></i>   
                </div>         
            </div>
        );
    }
}

export default navComponents;