import EndPointConfig from "../utils/endPointConfig";

export async function getOTPForUserName(payload, header) {
    const url = EndPointConfig.UserOnboarding.getOTPForUserName;
    alert(url)
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "contactNumber": payload.loginType ==="PHONE"?payload.userName:'',
                "email": payload.loginType ==="EMAIL"?payload.userName:''
            }),
            headers: header
        });
    
        return {
            status: response.ok,
            data: await response.json()
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export async function reRequestOTPForUser(data, header) {

    const url = EndPointConfig.UserOnboarding.resendOTP;
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "request_id": data.requestId
            }),
            headers: header
        });

        return {
            status: response.ok,
            data: await response.json()
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export async function validateOTP(data, header) {

    const url = EndPointConfig.UserOnboarding.validateOTP;
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "request_id": data.requestId,
                "otp_code": data.otp
            }),
            headers: header
        })

        return {
            status: response.ok,
            data: await response.json()
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}