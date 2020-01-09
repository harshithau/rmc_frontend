import React, { Component } from 'react';
import '../css/Admin.css';
import logo from '../image/paddy.jpg';
import {Card} from 'react-bootstrap';
import flood from '../image/paddy.jpg';
import rmc1 from  '../image/rmc1.jpg';
import market2 from  '../image/Rmc2.jpg';
import AllPost from './AllPost';
import PostForm from './PostForm';
import Navbar from './Navbar';
import Footer from './Footer';
import market3 from '../image/rmc4.jpg';



class Admin extends Component {
    render() {
        return (
            <div>
            <div className="grid">
              <div>
                <Card className=" mainheight li" >
                    <div className="top">Mandya Market</div>
                            <Card.Img variant="top" src={flood} />
                            <Card.Body>
                               
                                <Card.Text>
                                <div> M.C.ROAD,V.V.NAGAR, KALLAHALLI, MANDYA 571401</div>
                                </Card.Text>
                               
                                <button href="#" class="btn btn-primary volentainers">Yashu</button>
                          </Card.Body>
                        </Card>
                          </div>
                          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <Card className="mainheight li" >
                            <div className="top">K R market Banglure</div>
                                <Card.Img variant="top" src={rmc1}/>
                                <Card.Body>
                                   
                                    <Card.Text>
                                    K. R. Market (Krishna Rajendra Market), also known as 
                                        City Market, is the largest wholesale market dealing with commodities 
                                        in Bangalore,
                                    </Card.Text>
                                    <button href="#" class="btn btn-primary volentainers">Bindu</button>
                                </Card.Body>
                        </Card>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                      <div className="top">Mysore market</div>
                        <Card className="mainheight li" >
                            <Card.Img  variant="top" src={market2} />
                            <Card.Body>
                            <Card.Text>
                                 APMC Nanjangud Road Bandipalya Mysore
                               
                                570025
                                </Card.Text>
                                <button href="#" class="btn btn-primary volentainers">Vasavi</button>
                            </Card.Body>
                        </Card>
                      </div>
                      <div>
                      <Card className=" mainheight li" >
                      <div className="top">Maddur</div>
                            <Card.Img variant="top" src={market3}/>
                            <Card.Body>
                                <Card.Title>Orphans</Card.Title>
                                <Card.Text>
                                B M ROAD, CG DODDI, MADDUR, MANDYA DIST 571428
                                </Card.Text>
                                <button href="#" class="btn btn-primary volentainers">Divya</button>
                                
                                  
                            </Card.Body>
                        </Card>
                        
            </div>
            
            </div>
            <AllPost/>
            <PostForm/>
            <Navbar/>
            <Footer/>
         </div>
        );
    }
}

export default Admin;