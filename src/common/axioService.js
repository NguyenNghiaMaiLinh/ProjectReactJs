import axios from 'axios';
import { toastError } from 'helpers/toastHelper';

class AxiosService {

    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
    }

    handleSuccess(response) {
        console.log(response)
        return response;
    }

    handleError(error) {
        toastError(error);
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, body) {
        return this.instance.post(url, body);
    }
}

export default new AxiosService();