import axios from 'axios';

export default(url="https://retoolapi.dev")=>{
    return axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json"
        }
    });
}