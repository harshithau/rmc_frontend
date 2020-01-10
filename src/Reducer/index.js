import RegisterReducer from './RegisterReducer'
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    RegisterReducer,
    postReducer
})