import * as adminContants from './../constants/admin';

export const fetchAdmin = () => {
    return {
        type: adminContants.FETCH_ADMIN,

    }
}

export const fetchAdminSuccess = data => {
    return {
        type: adminContants.FETCH_ADMIN_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchAdminFailed = error => {
    return {
        type: adminContants.FETCH_ADMIN_FAILED,
        payload: {
            error
        }
    }
}
