import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

import dotenv from "dotenv";
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001"

const axiosClient = axios.create({

    headers: {
        'Content-Type': 'application/json'
    },
    
});

  axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }else  return response;
    
}, (error) => {
    alert(error)
})


export default axiosClient;