import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

function registerMember(userData) {
    return instance.post('auth/signup', userData);
}

export { registerMember };