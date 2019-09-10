import * as adminContants from './../constants/admin';
import { toastError } from 'helpers/toastHelper';

const initialState = {
    admin: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case adminContants.FETCH_ADMIN: {
            return {
                ...state,
                admin: null
            }
        }
        case adminContants.FETCH_ADMIN_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                admin: data
            }
        }
        case adminContants.FETCH_ADMIN_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                admin: null
            }
        }
        default:
            return state;
    }
};

export default reducer;