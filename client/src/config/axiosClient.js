import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json'
    },
    
});

  axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }else  return response;
    
}, (error) => {
    console.log(error)
    alert(error)
})


export default axiosClient;