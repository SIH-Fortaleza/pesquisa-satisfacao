import axios from 'axios';

const api = axios.create({
    baseURL: 'http://satisfacaopaciente.kinghost.net:21019'
})

export default api;
