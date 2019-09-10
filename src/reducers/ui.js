import * as types from './../constants/ui';

const initialState = {
    showLoading: false,
    showSignin: false,
    showSignup:false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_LOADING: {
            return {
                ...state,
                showLoading: true
            }
        } case types.HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            }
        } case types.SHOW_SIGNIN: {
            return {
                ...state,
                showSignin: true
            }
        } case types.HIDE_SIGNIN: {
            return {
                ...state,
                showSignin: false
            }
        } case types.SHOW_SIGNUP: {
            return {
                ...state,
                showSignup: true
            }
        } case types.HIDE_SIGNUP: {
            return {
                ...state,
                showSignup: false
            }
        }
        default:
            return state;
    }
}

export default reducer;