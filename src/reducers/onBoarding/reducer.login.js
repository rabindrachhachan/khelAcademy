import *as  types from "../../actions/types"


const initialState = {

    isLoggedIn: false,

    getOtpFailed: false,
    getOtpSuccess: false,
    getOtpRequest: false,
    error: null,


    otpValidationFailed: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_OTP_FOR_USERNAME_REQUEST:
            return{
                ...state,
                getOtpFailed: false,
                getOtpRequest:true,
                getOtpSuccess: false,
                error: null,
            }

        case types.GET_OTP_FOR_USERNAME_SUCCESS:
            return{
                ...state,
                getOtpFailed: false,
                getOtpSuccess: true,
                getOtpRequest:false,
                error: null,
                requestId: action.payload["request_id"],
            }

        case types.GET_OTP_FOR_USERNAME_FAILURE:
            return{
                ...state,
                getOtpFailed: true,
                getOtpSuccess: false,
                getOtpRequest:false,
                error: "Unable to process request",
            }

        case types.RESET_ERROR:
            return {
                ...state,
                getOtpRequest: false,
                otpValidationFailed: false,
                getOtpFailed: false,
            }

        default:
            return state;
    }
};

export default loginReducer;