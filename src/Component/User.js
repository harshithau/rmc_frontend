import React, { Component } from 'react';
import logo1 from '../image/user1.jpeg';
import logo2 from '../image/user2.jpeg';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import logo3 from '../image/user3.jpg';
import logo5 from '../image/user5.webp';
import logo4 from '../image/user4.jpg';
import logo6 from '../image/user6.webp';
import '../css/User.css';




class User extends Component {
    render() {
        return (
            <div>
            <div className="table">
                <div className="border left">
                <img src={logo1} className="first" />
                <hr></hr>
                <div> PRICE:RS:54/kg</div>
                <div>0.2tons</div>
                
                 </div>
                <div className="border">
                <img src={logo2} className="second" />
                <hr></hr>
                <div> PRICE:RS:32/kg </div>
                <div>0.3</div>
                </div>
                <div className="border left">
                <img src={logo3} className="third" />
                <hr></hr>
                <div> PRICE:RS54</div>
                <div>0.4tons</div>
                </div>
                <div className="border">
                <img src={logo4} className="four" />
                <hr></hr>
                <div> PRICE:RS67/kg</div>
                <div>0.7tons</div>
                </div>
                <div  className="border left">
                <img src={logo5} className="third" />
                <hr></hr>
                <div> PRICE:RS89/kg</div>
                <div>0.1tons</div>
                </div>
                <div className="border">
                <img src={logo6} className="four" />
                 <hr></hr>
                <div> PRICE:RS25/kg</div>
                <div>0.2tons</div>
                </div>
               
            </div>
          <Navbar/>
          <Footer/>
          </div>

        );
    }
}

export default User;