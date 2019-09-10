import * as loginContants from './../constants/login';
import { toastError } from 'helpers/toastHelper';

const initialState = {
    Email: null,
    Password: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginContants.LOGIN: {
            console.log('check')
            return {
                ...state,
                admin: null
            }
        }
        case loginContants.LOGIN_SUCCESS: {
            const { Email, Password} = action.payload;
            return {
                ...state,
                Email: Email,
                Password: Password
            }
        }
        case loginContants.LOGIN_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state
            }
        }
        default:
            return state;
    }
};

export default reducer;