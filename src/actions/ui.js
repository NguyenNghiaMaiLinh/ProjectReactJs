import * as uiTypes from './../constants/ui';

export const showLoading = () => ({
    type: uiTypes.SHOW_LOADING
});

export const hideLoading = () => ({
    type: uiTypes.HIDE_LOADING
});

export const showSignin = () => ({
    type: uiTypes.SHOW_SIGNIN
});

export const hideSignin = () => ({
    type: uiTypes.HIDE_SIGNIN
});

export const showSignup = () => ({
    type: uiTypes.SHOW_SIGNUP
});

export const hideSignup = () => ({
    type: uiTypes.HIDE_SIGNUP
});