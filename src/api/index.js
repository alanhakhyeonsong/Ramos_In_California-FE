import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

function registerMember(memberData) {
    return instance.post('auth/signup', memberData);
}

function loginMember(memberData) {
    return instance.post('auth/login', memberData);
}

export { registerMember, loginMember };