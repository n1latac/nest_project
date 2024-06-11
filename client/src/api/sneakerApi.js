import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const response = await $authHost.post('type/create', type);
    const result = response?.data?.data;
    return result
}

export const getTypes = async () => {
    const response = await $host.get('type/all')
    const result = response?.data?.data;
    return result
}

export const createBrand = async (brand) => {
    const response = await $authHost.post('brand/create', brand)
    const result = response?.data?.data;
    return result
}

export const getBrands = async () => {
    const response = await $host.get('brand/all', )
    const result = response?.data?.data;
    return result
}

export const createSneaker = async (sneaker) => {
    try {
        const response = await $authHost.post('device/create', sneaker)
        const result = response?.data?.data;
        return result
    }catch (e){
        console.log(e)
    }
}

export const getSneakers = async (type_id, brand_id, page, limit = 5) => {
    const response = await $host.get('device/all', {
        params: {
            type_id, brand_id, page, limit
        }
    });
    const result = response?.data?.data;
    return result;
};

export const getOneSneaker = async (id) => {
    const response = await $host.get('device/one/' + id)
    const result = response?.data?.data;
    return result
}