import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import * as types from "../../actions/types";
import { callAPI } from "../apiSaga";
import * as UserOnboardingAPI from "../../api/api.userOnboarding";


export function* getOTPForUserName(action) {
    let response = yield callAPI(UserOnboardingAPI.getOTPForUserName, action.payload, types.GET_OTP_FOR_USERNAME_FAILURE);
    if (response) {
        yield put({ type: types.GET_OTP_FOR_USERNAME_SUCCESS, payload: response.data })
    }
}

export function* reRequestOTPForUser(action) {
    let response = yield callAPI(UserOnboardingAPI.reRequestOTPForUser, action.payload, types.RESEND_OTP_FAILURE);
    if (response) {
        yield put({ type: types.RESEND_OTP_SUCCESS, payload: response.data })
    }
}

export function* validateOTP(action) {
    let response = yield callAPI(UserOnboardingAPI.validateOTP, action.payload, types.VALIDATE_OTP_FAILURE);
    if (response) {
        yield put({ type: types.VALIDATE_OTP_SUCCESS, payload: response.data })
    }
}


export function* watchUserOnBoarding() {
    yield takeEvery(types.GET_OTP_FOR_USERNAME_REQUEST, getOTPForUserName);
    yield takeEvery(types.RESEND_OTP_REQUEST,reRequestOTPForUser);
    yield takeEvery(types.VALIDATE_OTP_REQUEST,validateOTP)    
}