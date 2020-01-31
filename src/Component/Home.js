import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Home.css';
import '../css/Home_reg.css';
import logo from '../image/tomato.jpeg';
import slid2 from '../image/slid2.jpg';
import slid3 from '../image/slid1.jpeg';
import { Fade } from 'react-slideshow-image';
import home1 from  '../image/home1.jpeg';
import home2 from  '../image/home2.jpg';
import home3 from  '../image/backimg.webp';
import home4 from '../image/home3.jpg'
import Navbar_home from './Navbar_home';

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
          </div>
          <div className="each-fade">
          <div className="image-container">
          <img className="home_paddy_img" src={slid2} />
          </div>
          </div>
          <div className="each-fade">
          <div className="image-container">
          <img className="home_paddy_img" src={slid3} />
          </div>
          </div>
      </Fade>
     
  </div>
  <div>

      <div className="home_Page_down">
        <div > <img className="home_down_img" src={home1} /></div>
        <div><img className="home_down_img" src={home2} /> </div>
        <div><img className="home_down_img" src={home4} /> </div>
        <div><img className="home_down_img" src={home3} /></div>
    
        <div  className="home_text">Vitamin A keeps eyes and skin healthy<br/> and helps to protect against infections.</div>
         <div  className="home_text">Vitamin A keeps eyes and skin healthy<br/> and helps to protect against infections.</div>
        <div  className="home_text">Vitamin A keeps eyes and skin healthy<br/> and helps to protect against infections.</div>
        <div  className="home_text">Vitamin A keeps eyes and skin healthy<br/> and helps to protect against infections.</div>
      </div>
          <Navbar_home/>
          <Footer/>
    </div>     
    </div>      
        );
    }
}

export default Home;