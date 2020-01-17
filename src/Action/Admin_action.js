import axios from 'axios';
import  * as ActionTypes from  './types';

export function volunteersHandle(payload){
const options = {
    url: 'http://localhost:4013/volunteer',
    method: 'POST',
    data: payload
};


return function(dispatch)
{
    axios(options)
    .then(response => {
    console.log(response.status);
    });
    dispatch({type:'VOLUNTEER',payload:payload});
    }

}
export function productsDetails(payload1){
    const options = {
    url: 'http://localhost:4013/products',
    method: 'POST',
    data: payload1
    };


return function(dispatch)
{
    axios(options)
    .then(response => {
    console.log(response.status);
    });
    dispatch({type:'PRODUCTS',payload1:payload1});
    }
}
