import axios from 'axios';

const api = axios.create({
    baseURL: 'https://delivery-nikov.herokuapp.com',
})

export default api;
