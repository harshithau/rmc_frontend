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
sessionStorage.setItem('authentication', response.data.token)
sessionStorage.setItem('role', response.data.role);
BrowserHistory.push('/user_only')
}
})
.catch(error=>{
 window.alert(error.response.data.message)
})

}
}