import axios from 'axios'

export const signup = regUser => {

    return axios
        .post('signup', {
            Firstname: regUser.Firstname,
            Lastname: regUser.Lastname,
            email: regUser.email,
            password: regUser.password,
            Confirmpassword: regUser.Confirmpassword,
            Mobnum: regUser.Mobnum,
        })
        .then(res => {
            console.log(res.data)
        })
}