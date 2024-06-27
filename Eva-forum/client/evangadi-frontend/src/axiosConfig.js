import axios from 'axios';


const axiosBase = axios.create({
    baseURL: 'http://localhost:3306/api'
    // baseURL: 'sql3.freesqldatabase.com/api'
})

export default axiosBase