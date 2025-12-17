
import axios from '/js/axios.esm.js';

const http = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;
