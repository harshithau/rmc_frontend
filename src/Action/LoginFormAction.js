import axios from 'axios';
import BrowserHistory from '../utils/BrowserHistory';

export function loginHandle(payload){
   const options = {
    url: 'http://localhost:4013/Signin',
    method: 'POST',
    data: payload
};

return function(dispatch)
{
  axios(options)
  .then(response => {
  console.log(response);
  sessionStorage.setItem('authentication', response.data.token)
  sessionStorage.setItem('role', response.data.role)
  BrowserHistory.push("/user_only");
});
dispatch({type:'LOGIN',payload:payload});
}
}
