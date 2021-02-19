import axios from 'axios'

const instance = axios.create({
    baseURL: 'YOUR_API_KEY'
});


export default instance;