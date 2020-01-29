// import axios from 'axios';
// import BrowserHistory from '../utils/BrowserHistory';

// export function loginHandle(payload){
//    const options = {
//     url: 'http://localhost:4013/Signin',
//     method: 'POST',
//     data: payload
// };

// return function(dispatch)
// {
//   axios(options)
//   .then(response => {
//   console.log(response);
//   sessionStorage.setItem('authentication', response.data.token)
//   sessionStorage.setItem('role', response.data.role)
//   BrowserHistory.push("/user_only");
// });
// dispatch({type:'LOGIN',payload:payload});
// }
// }

import axios from 'axios'
import BrowserHistory from '../utils/BrowserHistory';
export function loginHandle(payload) {
const options = {
url: 'http://localhost:4013/Signin',
method: 'POST',
data: payload
};

return function (dispatch) {
axios(options)
.then(response => {

if (response.data === "User does not exist") {
alert("User does not exist")
}
else if (response.data === "wrong password") {
alert("Incorrect password")
}

else {
// const LoginDet = JSON.stringify({'token':response.data.token, 'userId': response.data.userId});
sessionStorage.setItem('authentication', response.data.token)
// sessionStorage.setItem('LOGINDETAILS', LoginDet);
sessionStorage.setItem('role', response.data.role);
BrowserHistory.push('/user_only')
}
})
.catch(error=>{
debugger
// console.log("11111111111",error.response.data.message)
window.alert(error.response.data.message)
})

}
}