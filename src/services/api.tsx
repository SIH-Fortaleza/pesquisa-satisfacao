import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-satisfacao.herokuapp.com'
})

export default api;
