import * as types from "./types";

export function getOTPForUserName(userName,loginType) {
    return {
        type: types.GET_OTP_FOR_USERNAME_REQUEST,
        payload: {
            "userName": userName,
            "loginType": loginType
        }
    }
}

export function resetError() {
    return {
        type: types.RESET_ERROR
    }
}

export function validateOTP(requestId, otp) {
    return {
        type: types.VALIDATE_OTP_REQUEST,
        payload: {
            "requestId": requestId,
            "otp": otp
        }
    }
}
