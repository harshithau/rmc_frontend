import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Component/Register';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import LoginForm from './Component/LoginForm';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';import Home from './Component/Home';
import Admin from './Component/Admin';
import volunteer1 from './Component/volunteer1';
import volunteer2 from './Component/volunteer2';
import volunteer3 from './Component/volunteer3';
import user_only from './Component/User_only';
// import payment from './Component/payment';
import Checkoutform from './Component/Checkoutform';
import Forgetpassword from './Component/Forgetpassword';
import Navbar_home from './Component/Navbar_home';
import Navbar_login from './Component/Navbar_login';
const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
  <Route
  {...rest}
  render={props => (
  (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
  <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
  )}
  />
  );
  const PublicRoute = ({ component: IncomingComponent, ...rest }) => (
    <Route
    {...rest}
    render={props => (
    (!sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
    <Redirect to={{pathname: '/user_only', state: { from: props.location }, }}/>)
    )}
    />
    );
    // const AdminRoute = ({ component: IncomingComponent, ...rest }) => (
    //   <Route
    //   {...rest}
    //   render={props => (
    //   (!sessionStorage.getItem('role')==='admin') ? (<IncomingComponent {...props} />) : (
    //   <Redirect to={{pathname: '/admin', state: { from: props.location }, }}/>)
    //   )}
    //   />
    //   );
function App() {
  return (
  <div className="App">
    <div className="body">
   <Router>
      <Switch>
       <Route exact path='/' component={Home}></Route> 
       <Route exact path='/navbar_home' component={Navbar_home}></Route> 
       <Route exact path='/navbar_login' component={Navbar_login}></Route> 
        <Route exact path='/Navbar' component={Navbar}></Route>  
        <Route exact path='/register' component={Register}></Route> 
        <PublicRoute exact path='/login' component={LoginForm}></PublicRoute> 
        <Route exact path='/Footer' component={Footer}></Route>  
        <Route exact path='/confirmmail' component={Forgetpassword}></Route>
        <PrivateRoute exact path='/Admin' component={Admin}></PrivateRoute> 
        <PrivateRoute exact path='/volunteer1' component={volunteer1}></PrivateRoute>
        <PrivateRoute exact path='/volunteer2' component={volunteer2}></PrivateRoute>
        <PrivateRoute exact path='/volunteer3' component={volunteer3}></PrivateRoute>
        <PrivateRoute exact path='/user_only' component={user_only}></PrivateRoute>
        <PrivateRoute exact path='/check' component={Checkoutform}></PrivateRoute>
      </Switch>
    </Router>
    </div>
   </div>
  );
}
export default App;
