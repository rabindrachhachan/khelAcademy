import Config from 'react-native-config';
console.log("the base ur is " + Config.IDENTITY_ENDPOINT_BASE_URL)

const baseURL = Config.IDENTITY_ENDPOINT_BASE_URL;
alert(baseURL)

export default EndPointConfig = {

    UserOnboarding: {
        getOTPForUserName: `${baseURL}/api/user_register`,
    },
    
    ManageEvent:{
        createEvent:`${baseURL}/api/create_event`
    }
}