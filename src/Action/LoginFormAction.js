import axios from 'axios';
import BrowserHistory from '../utils/BrowserHistory';
export function loginHandle(payload){
    debugger
const options = {
url: 'http://localhost:4013/Signin',
method: 'POST',
data: payload
};


return function(dispatch)
{console.log(payload)
axios(options)
.then(response => {
debugger
console.log(response);
if(response.data === "User does not exist")
{
  window.alert("User does not exist");
}
else if(response.data === "wrong password")
{
    window.alert("Incorrect password");
}
else {
    BrowserHistory.push('./home')
}

dispatch({type:'LOGIN',payload:payload});
});

}
}




