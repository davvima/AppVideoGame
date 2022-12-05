import axios from 'axios'
// import dotenv from "dotenv";
// dotenv.config();

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API || "http://localhost:3001",
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