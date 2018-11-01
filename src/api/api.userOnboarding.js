import EndPointConfig from "../utils/endPointConfig";

export async function getOTPForUserName(data, header) {

    const url = EndPointConfig.UserOnboarding.getOTPForUserName;
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "contactNumber": data.loginType ==="PHONE"?data.userName:'',
                "email": data.loginType ==="EMAIL"?data.userName:''
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