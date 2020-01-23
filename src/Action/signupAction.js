import axios from 'axios'
import BrowserHistory from '../utils/BrowserHistory';

export function registerHandle(payload){
  debugger;
  console.log(payload)
 const options = {
    url: 'http://localhost:4013/Signup',
    method: 'POST',
    data: payload
};
return function(dispatch)
{
axios(options)
.then(response => {
  BrowserHistory.push('/login')
});
dispatch({type:'REGISTER',payload:payload});
}
}