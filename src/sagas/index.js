import { call, delay, fork, put, take, takeEvery  } from 'redux-saga/effects';
import { fetchAdminFailed, fetchAdminSuccess } from './../actions/admin';
import { loginSuccess, loginFailed } from './../actions/login';
import { hideLoading, showLoading } from './../actions/ui';
import { getAdminDetail } from './../apis/admin';
import { login } from './../apis/login';
import * as adminTypes from './../constants/admin';
import * as loginTypes from './../constants/login';
import { STATUS_CODE } from './../constants/index';

function* watchFetchAdminAction() {
    while (true) {
        yield take(adminTypes.FETCH_ADMIN);
        yield put(showLoading());
        const resp = yield call(getAdminDetail);
        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchAdminSuccess(data))
        } else {
            yield put(fetchAdminFailed(data));
        }
        yield delay(500);
        yield put(hideLoading())
    }
}

function* loginSaga({ payload }) {
    const { Email, Password } = payload;
    const resp = yield call(login, {
        Email,
        Password
    })
    console.log('success');
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {

        yield put(loginSuccess(data));
    }
    else {
        yield put(loginFailed(data));
    }
}

function* rootSaga() {
    yield fork(watchFetchAdminAction);
    yield takeEvery(loginTypes.LOGIN, loginSaga);
}

export default rootSaga;