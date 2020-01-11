import axios from 'axios'
export function loginHandle(payload){
    debugger
const options = {
url: 'http://localhost:4013/Signup',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
});
dispatch({type:'LOGIN',payload:payload});
}
}