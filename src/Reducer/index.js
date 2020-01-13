import RegisterReducer from './RegisterReducer'
import { combineReducers } from 'redux';
import  LoginFormReducer from  './LoginFormReducer';
import Admin_reducer from './Admin_reducer';
import  Market_reducer from './Market_reducer';

export default combineReducers({
    RegisterReducer,
    Admin_reducer,
    LoginFormReducer,
    Market_reducer
})