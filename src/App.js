import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="body">
      {/* <Navbar/> */}
     
      {/* <Register/> */}
      {/* <LoginForm/>
      <Footer/> */}
      {/* <LoginForm/> */}
      <Router>
        <switch>
       <Route exact path='/Navbar' component={Navbar}></Route>  
        {/* <Route exact path='/login' component={Login}></Route>  */}
        {/* <Route exact path='/' component={Index}></Route>  */}
        <Route exact path='/Register' component={Register}></Route> 
        <Route exact path='/LoginForm' component={LoginForm}></Route> 
      <Route exact path='/Footer' component={Footer}></Route>  
        </switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
