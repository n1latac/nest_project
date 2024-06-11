import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, password) => {
    const response = await $host.post('auth/register', {email, password})
    const result = response?.data?.data;
    localStorage.setItem('token', result.token)
    return result?.user;
}

export const login = async (email, password) => {
    const response = await $host.post('auth/login', {email, password})
    const result = response?.data?.data;
    localStorage.setItem('token', result.token)
    return result;
}

export const check = async () => {
    try {
        const response = await $authHost.get('auth/check-auth' );
        const result = response?.data?.data;
        localStorage.setItem('token', result.token)
        return result.user
    }catch(e){
        console.log(e)
    }
}