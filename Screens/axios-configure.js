import axios from 'axios';

const app = axios.create({
    baseURL: "http://127.0.0.1:5000/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;