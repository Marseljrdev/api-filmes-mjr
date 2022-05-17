import axios from 'axios';

//API https://sujeitoprogramador.com/r-api/?api=filmes
//CRIAR A BASEURL

const api = axios.create({
    baseURL: ' https://sujeitoprogramador.com'
});

export default api;

