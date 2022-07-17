import { instance } from "@/api/index";

function registerMember(memberData) {
    return instance.post('auth/signup', memberData);
}

function loginMember(memberData) {
    return instance.post('auth/login', memberData);
}

function logoutMember(memberData) {
    return instance.post('auth/logout', memberData);
}

export {
    registerMember,
    loginMember,
    logoutMember,
}