import axiosService from './../common/axioService';
import { API_ENDPOINT } from './../constants';

const url = 'Account/GetAdminDetail';

export const getAdminDetail = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}

