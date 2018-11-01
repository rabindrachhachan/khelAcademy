import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import { colors } from "../../../constants";

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 15
    },

    topContainer: {
        flex: 0.6,
        width: '100%',
        flexDirection: 'column',
        paddingVertical: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    bottomContainer: {
        flex: 0.4,
        width: '100%',
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'space-between'
    },

    countryPickerContainer: {
        height: 40,
        flexDirection: 'row',
        width: DEVICE_WIDTH * 0.3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    countryPicker: {
        width: DEVICE_WIDTH * 0.3,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal:7,
    },

    textInputContainerMob: {
        width: DEVICE_WIDTH * 0.5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    textInputContainerEmail: {
        width: DEVICE_WIDTH * 0.9,
        height: 50,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    textInput: {
        width: DEVICE_WIDTH * 0.9,
        fontSize: 18,
        height: 40,
        lineHeight: 20,
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
    },

    textInputMob: {
        width: DEVICE_WIDTH * 0.5,
        height: 40,
        backgroundColor: 'transparent',
        alignSelf: 'flex-start',
        letterSpacing: 5,
    },

    charImage: {
        position: 'absolute',
    },

    button: {
        width: DEVICE_WIDTH * 0.6,
        alignSelf: 'center',
        backgroundColor: colors.green
    },

    text1: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.green,
        backgroundColor: 'transparent'

    },

    flexLarge: {
        flex: Platform.OS == 'ios' ? 1 : 0.6
    },
    flexSmall: {
        flex: 0.4
    },
    patternBackgroundImage: {
        resizeMode: 'cover'
    },
    chatImageView: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatColoredImage: {
        resizeMode: 'cover'
    },

    countryCodeWrapper: {
        flex: 0.4,
        paddingRight: 10,
    },

    phoneNumberWrapper: {
        flex: 0.6,
    }
});

export default styles;
