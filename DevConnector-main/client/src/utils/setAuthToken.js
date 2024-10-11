import axios from "axios";

const setAuthToken = (token) =>{
    // console.log(token);
    if(token){
        // console.log(token)
        axios.defaults.headers.common['x-auth-token']=token;
    }
    else{
        // console.log("token nhi tha")
        delete axios.defaults.headers.common['x-auth-token'];
    }
}


export default setAuthToken;