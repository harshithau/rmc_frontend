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
if(response.data === "User does not exist")
{
 alert("User does not exist");
}
else if(response.data === "wrong password")
{
   alert("Incorrect password");
}
else {
    BrowserHistory.push('./User_only')
}

dispatch({type:'LOGIN',payload:payload});
});

}
}




