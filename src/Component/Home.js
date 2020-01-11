import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Home.css';
import logo from '../image/slid3.png';
import slid2 from '../image/slid2.jpg';
import slid3 from '../image/slid1.jpeg';

import { Fade } from 'react-slideshow-image';
// import Navbar from '../Component/Navbar;
// import Footer from '../Component/Footer';
import home1 from  '../image/home1.jpeg';
import home2 from  '../image/home2.png';
import home3 from  '../image/backimg.webp';



  const fadeProperties = {
    duration: 2000,
    transitionDuration: 200,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
}
  

class Home extends Component {
    render() {
        
        return (
            <div>
         <div className="slide-container">
              <Fade  {...fadeProperties}>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={logo} />
                  </div>
                  <h2>Vegetables are important sources of many nutrients, including potassium, <br/>dietary fiber, folate (folic acid), vitamin A, and vitamin C.</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={slid2} />
                  </div>
                  <h2>All vegetables contain healthful vitamins, minerals, and fiber.</h2>
                </div>
                <div className="each-fade">
                  <div className="image-container">
                    <img className="home_paddy_img" src={slid3} />
                  </div>
                  <h2>Eating plenty of vegetables is one of the easiest ways for people to improve <br/>their health and well-being..</h2>
                </div>
               
              </Fade>
              </div>
              <div className="home_Page_down">
                <div >
                <img className="home_down_img" src={home1} />
                </div>
                <div>
                <img className="home_down_img" src={home2} />
                </div>
                <div>
                <img className="home_down_img" src={home3} />
                </div>
              </div>
              <Navbar/>
              <Footer/>
  
            </div>           
                
              
    
   
        );
    }
}

export default Home;