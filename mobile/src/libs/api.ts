import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://nlw-return-impulse-production-ba39.up.railway.app/',
});