import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import User from './Component/User';
import Admin from './Component/Admin';
import volunteer1 from './Component/volunteer1';
// import AllPost from './Component/AllPost';
// import PostForm from './Component/PostForm'
// import Yashu from './Component/Yashu';
// import volunteer1 from './Component/volunteer1'

function App() {
  return (
    <div className="App">
      <div className="body">
    
      <Router>
        <switch>
       <Route exact path='/Navbar' component={Navbar}></Route>  
       
        <Route exact path='/register' component={Register}></Route> 
        <Route exact path='/LoginForm' component={LoginForm}></Route> 
      <Route exact path='/Footer' component={Footer}></Route>  
      <Route exact path='/Home' component={Home}></Route> 
      <Route exact path='/User' component={User}></Route> 
      <Route exact path='/Admin' component={Admin}></Route> 
      {/* <Route exact path='/AllPost' component={AllPost}></Route> 
       <Route exact path='/AllPost' component={PostForm}></Route>  */}
       <Route exact path='/volunteer1' component={volunteer1}></Route>
    
        </switch>
      </Router>
     

      
      </div>
    </div>
  );
}


export default App;
