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


export function* watchUserOnBoarding() {
    yield takeEvery(types.GET_OTP_FOR_USERNAME_REQUEST, getOTPForUserName);
}