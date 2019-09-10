import axiosService from './../common/axioService';
import { API_ENDPOINT } from './../constants';

const url = 'Account/Login';

export const login = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data); 
}

