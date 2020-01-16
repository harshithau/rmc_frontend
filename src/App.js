import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import Admin from './Component/Admin';
import volunteer1 from './Component/volunteer1';
import volunteer2 from './Component/volunteer2';
import volunteer3 from './Component/volunteer3';
import user_only from './Component/User_only';
import CheckoutForm from './Component/CheckoutForm';
import {Elements, StripeProvider} from 'react-stripe-elements';
function App() {
  return (
  <div className="App">
    <div className="body">
    <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
     
   <Router>
      <switch>
        <Route exact path='/Navbar' component={Navbar}></Route>  
        <Route exact path='/register' component={Register}></Route> 
        <Route exact path='/login' component={LoginForm}></Route> 
        <Route exact path='/Footer' component={Footer}></Route>  
        <Route exact path='/Home' component={Home}></Route> 
        <Route exact path='/Admin' component={Admin}></Route> 
        <Route exact path='/volunteer1' component={volunteer1}></Route>
        <Route exact path='/volunteer2' component={volunteer2}></Route>
        <Route exact path='/volunteer3' component={volunteer3}></Route>
        <Route exact path='/user_only' component={user_only}></Route>
        <Route exact path='/CheckoutForm' component={CheckoutForm}></Route>
      </switch>
    </Router>
    {/* </StripeProvider> */}
      </div>
   </div>
  );
}
export default App;
