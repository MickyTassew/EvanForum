import axios from 'axios';


const axiosBase = axios.create({
    // baseURL: 'http://localhost:3306/api'
    baseURL: 'https://evanforum-1.onrender.com/api'
})

export default axiosBase
