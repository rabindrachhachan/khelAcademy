import Config from 'react-native-config';
console.log("the base ur is " + Config.IDENTITY_ENDPOINT_BASE_URL)

const baseURL = Config.IDENTITY_ENDPOINT_BASE_URL;


export default EndPointConfig = {

    UserOnboarding: {
        getOTPForUserName: `${baseURL}/api/user_register`,
    },
}