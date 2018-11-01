import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    BackHandler,
    Keyboard
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../constants";

import { 
    validateOTP, 
    resetError, 
    resendOTP,
    goToLogin 
} from "../../../actions/login";

import backPattern from "../../../assests/common/backPattern.png";
import lockedColored from "../../../assests/common/lockedColored.png";
import Snackbar from 'react-native-snackbar';
import { isValidOtpEntered } from "../../../utils/helper";
import I18n from '../../../translation/i18n'


import TouchableDebounce from "../../common/touchableDebounce";

const SPACE_BETWEEN_LETTERS = "      ";
const OTP_LENGTH = 4;

class OTPAuthenticateScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            otpCode: "",
            isValidOtp: true,
            otpResendCount: 0,
        }

        this.onConfirmationCodeTextChanged = this.onConfirmationCodeTextChanged.bind(this);
    }

    handler = () => {
        this.props.navigation.navigate('login')
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handler);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handler);
    }

    onLoginButtonPressed = () => {
        const otp = this.removeSpaceInOtp(this.state.otpCode)
        if (!isValidOtpEntered(otp)) {
            this.setState({ isValidOtp: false })
            return
        }

        this.props.validateOTP(this.props.requestId, otp);
    }

    onResendOTPButtonPressed = () => {
        const otp = this.removeSpaceInOtp(this.state.otpCode)
        this.props.resendOTP(this.props.requestId);
    }

    removeSpaceInOtp = (otp) => {
        const val = otp.replace(/ /g, '');
        return val;
    }

    getTextWithSpace = (text, space) => {
        const val = text.replace(/ /g, '').split('');
        const spaced = val.join(space);
        return spaced;
    }

    onConfirmationCodeTextChanged = (text) => {

        if (this.props.otpValidationFailed) {
            this.props.resetError();
        }

        this.setState({ isValidOtp: true });
        this.setState({ otpCode: this.getTextWithSpace(text, SPACE_BETWEEN_LETTERS) })
    }

    renderTopLogoContainer = () => {
        return (
            <View style={styles.topContainer}>
                <Image source={backPattern} />
                <Image source={lockedColored} style={{ position: 'absolute' }} />
            </View>
        );
    }

    renderBottomContainer = () => {
        return (
            <View style={[styles.bottomContainer, this.state.isKeyboardOpen ? styles.flexLarge : '']}>
                <Text style={styles.text} >{I18n.t("Please enter OTP received by SMS/email")}</Text>
                <View style={{ width: '100%' }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={this.getTextWithSpace('0000', SPACE_BETWEEN_LETTERS)}
                        autoCapitalize="characters"
                        underlineColorAndroid='transparent'
                        onChangeText={this.onConfirmationCodeTextChanged}
                        includeFontPadding={true}
                        maxLength={SPACE_BETWEEN_LETTERS.length * (OTP_LENGTH - 1) + OTP_LENGTH}
                        value={this.state.otpCode}
                        returnKeyType={'done'}
                        keyboardType={'numeric'}
                        onSubmitEditing={this.onLoginButtonPressed}
                    />
                    {this.state.isValidOtp ? null : <Text style={{ color: 'red', fontSize: 12, }} >{I18n.t("Enter a valid 4 digit OTP")}</Text>}
                </View>
                <View>
                    <View style={styles.textViewWrapper}>
                        <Text style={styles.text}>
                            {I18n.t("OTP taking too long to reach you?")}
                        </Text>
                        <TouchableDebounce onPress={this.onResendOTPButtonPressed}>
                            <Text style={styles.text1}>
                                {I18n.t("Resend OTP")}
                            </Text>
                        </TouchableDebounce>
                    </View>
                    <Text style={styles.text}>
                        {I18n.t("By clicking on Login, you agree to the Terms of Service and Privacy Policy")}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableDebounce
                        style={[styles.button, { backgroundColor: colors.PRIMARY_FONT_COLOR }]}
                        onPress={this.onLoginButtonPressed}
                        disabled={this.props.processingRequest}
                    >
                        <Text style={{ color: 'white' }} >{I18n.t("LOGIN")}</Text>
                    </TouchableDebounce>
                </View>

            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderTopLogoContainer()}
                {this.renderBottomContainer()}
                {this.props.otpValidationFailed === true ? Snackbar.show({
                    title: this.props.error,
                    duration: Snackbar.LENGTH_LONG
                }) : null}
            </View>
        );
    }
}



const mapStateToProps = state => {
    return {
        requestId: state.LoginReducer.requestId,
        otpValidationFailed: state.LoginReducer.otpValidationFailed,
        error: state.LoginReducer.error,
        processingRequest: state.LoginReducer.processingRequest
    }
}

const mapDispatchToProps = {
    validateOTP,
    resetError,
    resendOTP,
    goToLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPAuthenticateScreen);