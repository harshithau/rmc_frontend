import axios from 'axios'

export const signup = regUser => {

    return axios
    .post('Singup', {
        Firstname: regUser.Firstname,
        Lastname: regUser.Lastname,
        email: regUser.email,
        password: regUser.password,
        Confirmpassword: regUser.Confirmpassword,
        Mobnum: regUser.Mobnum,
    })
    .then(res => {
        console.log(res)
    })
}








import React, { Component } from 'react';
import '../css/Admin.css';
import logo from '../image/paddy.jpg';
import {Card} from 'react-bootstrap';
import flood from '../image/paddy.jpg';
import rmc1 from  '../image/rmc1.jpg';
import market2 from  '../image/Rmc2.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import market3 from '../image/rmc4.jpg';
import Admin_page from './Admin_page';
import TableRow from './TableRow';
import axios from 'axios';
import BrowserHistory from '../utils/BrowserHistory';
import {VolunteersDetails} from  '../Action/Admin_action';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';



class Admin extends Component {
  state={
    data:[]
}
componentDidMount=()=>{
  debugger;
    axios.get('http://localhost:4013/getallVolunteers')
    .then(res => {
        this.setState({data:res.data});
        console.log(res)
    });
}
   
   
    render() {
        return (
            <div>
            <div className="grid">
              <div>
                <Card className=" mainheight li" >
                    <div className="top">Mandya Market</div>
                            <Card.Img variant="top" src={flood} />
                            <Card.Body>
                               
                                <Card.Text className="market_detail">
                                <div> M.C.ROAD,V.V.NAGAR, KALLAHALLI, MANDYA 571401</div>
                                </Card.Text>
                               
                               
                          </Card.Body>

                        </Card>
                       
                      
                          </div>
                          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <Card className="mainheight li" >
                            <div className="top">K R market Banglure</div>
                                <Card.Img variant="top" src={rmc1}/>
                                <Card.Body>
                                   
                                    <Card.Text className="market_detail">
                                    K. R. Market (Krishna Rajendra Market), also known as 
                                        City Market, is the largest wholesale market dealing with commodities 
                                        in Bangalore,
                                    </Card.Text>
                                    {/* <button href="#" class="btn btn-primary volentainers">Bindu</button> */}
                                </Card.Body>
                        </Card>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                      <div className="top">Mysore market</div>
                        <Card className="mainheight li" >
                            <Card.Img  variant="top" src={market2} />
                            <Card.Body>
                            <Card.Text className="market_detail">
                                 APMC Nanjangud Road Bandipalya Mysore
                               
                                570025
                                </Card.Text>
                                {/* <button href="#" class="btn btn-primary volentainers">Vasavi</button> */}
                            </Card.Body>
                        </Card>
                      </div>
                      <div>
                      <Card className=" mainheight li" >
                      <div className="top">Maddur</div>
                            <Card.Img variant="top" src={market3}/>
                            <Card.Body>
                              
                                <Card.Text className="market_detail">
                                B M ROAD, CG DODDI, MADDUR, MANDYA DIST 571428
                                </Card.Text>
                                {/* <button href="#" class="btn btn-primary volentainers">Divya</button> */}
                                
                                  
                            </Card.Body>
                        </Card>
                        
            </div>
            </div  >
            <div>
            <div className=" Volunteers_container">
          <div><h4 > Volunteers</h4> 
          {this.state.data.map(name=>
                  
                       <p>{name.volunteerName}</p> 

)}
         </div>
            <Admin_page/>
         </div>
        
            
            <Navbar/>
            <Footer/>
         </div>
         </div>

        );
    }
}


export default Admin;

