import axios from 'axios';

const api = axios.create({
    // Change to localhost if you are in dev mode --> http://localhost:8080
    baseURL: 'https://delivery-nikov.herokuapp.com',
});

export default api;
