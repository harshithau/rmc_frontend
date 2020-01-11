import RegisterReducer from './RegisterReducer'
import { combineReducers } from 'redux';
import  LoginFormReducer from  './LoginFormReducer';
import Admin_reducer from './Admin_reducer';

export default combineReducers({
    RegisterReducer,
    Admin_reducer,
    LoginFormReducer
})