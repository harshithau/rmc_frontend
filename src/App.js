import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LoginForm from './Component/LoginForm';

function App() {
  return (
    <div className="App">
      <div className="body">
      <Navbar/>
     
      <Register/>
      <LoginForm/>
      <Footer/>
      {/* <LoginForm/> */}
      </div>
    </div>
  );
}

export default App;
