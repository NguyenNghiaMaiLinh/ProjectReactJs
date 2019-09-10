import * as loginContants from './../constants/login';

export const login = () => {
    return {
        type: loginContants.LOGIN,
    }
}

export const loginSuccess = (email,password) => {
    return {
        type: loginContants.LOGIN_SUCCESS,
        payload: {
            email,
            password
        }
    }
}

export const loginFailed = error => {
    return {
        type: loginContants.LOGIN_FAILED,
        payload: {
            error
        }
    }
}
