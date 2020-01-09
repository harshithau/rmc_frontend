import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Home.css';
import logo from '../image/Rmclogo.jpg';


class Home extends Component {
    render() {
        return (
            <div  className="body">
                <div>
                     <p className="para"><img src={logo} className="frontimg" /> RMC Marketing Private Limited is a Non-govt company, incorporated on 01 Jan, 2009.
                It's a private unlisted company and is classified as 'company limited by shares'.
                Company's authorized capital stands at Rs 15.0 lakhs and has 53.333336% paid-up 
                capital which is Rs 8.0 lakhs. RMC Marketing Private Limited last annual general 
                meet (AGM) happened on 30 Sep, 2017. The company last updated its financials on
                31 Mar, 2017 as per Ministry of Corporate Affairs (MCA).RMC Marketing Private Limited
                is majorly in Business Services business from last 11 years and currently, company 
                operations are active. Current board members & directors are PREETI RAJESH KOKIRKAR, 
                SANJAYKUMAR SINHA and RISHABH SANJAY SINHA .Company is registered in Pune 
                (Maharashtra) Registrar Office. RMC Marketing Private Limited registered address is 312 / 313 
                RAJDHANI COMPLEX NEAR SHANKAR MAHARAJ MATH, SATARA ROAD PUNE MH 411043 IN.</p> 
                </div>
              
                <Navbar/>
    <Footer/>
    </div>
   
        );
    }
}

export default Home;