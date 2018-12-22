import React, { Component } from "react";
import {
    View,
    Image,
    TextInput,
    Button,
    Text
} from "react-native";

import Snackbar from 'react-native-snackbar';
import { connect } from "react-redux";
import CountryPicker from 'react-native-country-picker-modal';
import styles from "./styles";
import { colors } from "../../../constants";
import backPattern from "../../../assests/common/backPattern.png";

import { validateEmail, validateMobileNumber } from "../../../utils/helper"
import I18n from '../../../translation/i18n'

import { 
    getOTPForUserName,
    resetError 
} from "../../../actions/login";

import { debounce } from "lodash";

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            useMobile: true,
            wrongEntryMesaage: '',
            cca2: 'IN',
            callingCode: '91',
            isKeyboardOpen: false
        };

        this.onGetOTPForUserNamePressedDebounced = debounce(this.onGetOTPForUserNamePressed.bind(this), 1000);
        this.onUserNameTextChanged = this.onUserNameTextChanged.bind(this);
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps,prevState,snapShot) {
        if(this.props.getOtpSuccess){
            this.props.navigation.navigate('otpAuthenticate')
        }
    
    }

    onGetOTPForUserNamePressed = () => {
        if (!this.state.useMobile && !validateEmail(this.state.userName)) {
            this.setState({ wrongEntryMesaage: I18n.t("Enter a valid email address") });
            return
        }

        if (this.state.useMobile && !validateMobileNumber(this.state.userName)) {
            this.setState({ wrongEntryMesaage: I18n.t("Enter a valid mobile number") });
            return
        }
        this.props.navigation.navigate('otpAuthenticate')

        // this.state.useMobile ?
        //     this.props.getOTPForUserName((this.state.callingCode + this.state.userName), "PHONE") :
        //     this.props.getOTPForUserName(this.state.userName, "EMAIL");

    }

    onUserNameTextChanged = (text) => {
        if (this.props.getOtpFailed) {
            this.props.resetError();
        }
        this.setState({ userName: text });
        this.setState({ isValidEmail: true });
        this.setState({ wrongEntryMesaage: "" });
    }

    renderTopLogoContainer = () => {
        return (
            <View style={styles.topContainer}>
                <Image source={backPattern} style={styles.patternBackgroundImage} />
                <View style={styles.chatImageView}>
                    <Text style={styles.text1}>{'Create KhelAcademy Account'}</Text>
                </View>
            </View>
        );
    }

    renderPickerForCountryCode = () => {
        if (!this.state.useMobile)
            return null

        return (
            <View style={styles.countryCodeWrapper}>
                <Text style={{ color: 'black' }} >{I18n.t("Country Code")}</Text>
                <View style={styles.countryPickerContainer}>
                    <CountryPicker
                        styles={{ touchFlag: styles.countryPicker }}
                        onChange={value => {
                            this.setState({ cca2: value.cca2, callingCode: value.callingCode })
                        }}
                        cca2={this.state.cca2}
                        filterable
                    />
                    <Text style={{ color: 'black', marginLeft: 50, fontSize: 15, position: 'absolute' }} >{this.state.callingCode}</Text>
                </View>
            </View>

        )
    }

    renderTextInput = () => {
        if (this.state.useMobile) {
            return (
                <View style={styles.phoneNumberWrapper}>
                    <Text style={{ color: 'black', paddingLeft: 5 }} >{I18n.t("Mobile")}</Text>
                    <View style={styles.textInputContainerMob}>
                        <TextInput
                            placeholder="1234567890"
                            style={styles.textInputMob}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            onChangeText={this.onUserNameTextChanged}
                            underlineColorAndroid='transparent'
                            value={this.state.userName}
                            maxLength={10}
                            returnKeyType={'done'}
                            keyboardType={'numeric'}
                            onSubmitEditing={this.onGetOTPForUserNamePressed}
                        />
                        {<Text style={{ color: 'red', fontSize: 14, }}>{this.state.wrongEntryMesaage}</Text>}
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.textInputContainerEmail}>
                    <Text style={{ color: 'black' }} >{I18n.t("Email Id")}</Text>
                    <TextInput
                        placeholder="abc@gmail.com"
                        style={styles.textInput}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        onChangeText={this.onUserNameTextChanged}
                        value={this.state.userName}
                        underlineColorAndroid='transparent'
                        maxLength={50}
                        returnKeyType={'done'}
                        keyboardType={'email-address'}
                        onSubmitEditing={this.onGetOTPForUserNamePressed}
                    />
                    {<Text style={{ color: 'red', fontSize: 14, }}>{this.state.wrongEntryMesaage}</Text>}
                </View>
            )
        }

    }

    renderMobileText =()=> <Text style={{ color: colors.BLACK_LIGHT, fontSize: 13 }}>{I18n.t('Enter your mobile')}</Text> 
    renderEmailText =()=> <Text style={{ color: colors.BLACK_LIGHT, fontSize: 13 }}>{I18n.t("Enter your email")}</Text>

    renderUseMobileText =()=>(
        <Text 
            style={{ color: colors.SECONDARY_FONT_COLOR, alignSelf: 'center', fontSize: 16 }} 
            onPress={() => { this.setState({ useMobile: true, wrongEntryMesaage: '', userName: "" }) }}>
            {I18n.t("Use mobile")}
        </Text>
    ) 

    renderUseEmailText =()=> (
        <Text 
            style={{ color: colors.SECONDARY_FONT_COLOR, alignSelf: 'center', fontSize: 16, }} 
            onPress={() => { this.setState({ useMobile: false, wrongEntryMesaage: '', userName: "" }) }}>
            {I18n.t("Use email")}
        </Text>
    )

    renderBottomContainer = () => {
        return (
            <View style={[styles.bottomContainer]}>
                
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} behavior='padding'>
                        {this.renderPickerForCountryCode()}
                        {this.renderTextInput()}
                    </View>
                    {this.state.useMobile ? this.renderMobileText() : this.renderEmailText()}
                </View>
                <View style={{ marginTop: 10, flex: 1 }}>
                    <View style={{ height: 30, justifyContent: 'center' }}>
                        {this.state.useMobile ? this.renderUseEmailText() : this.renderUseMobileText()}
                    </View>
                    <Button
                        title={I18n.t("GET OTP")}
                        color={colors.mediumseagreen}
                        disabled={
                            this.state.useMobile ? !(this.state.userName.length === 10):!(this.state.userName.length > 0)
                        }
                        onPress={this.onGetOTPForUserNamePressedDebounced} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderTopLogoContainer()}
                {this.renderBottomContainer()}

                {this.props.getOtpFailed ? Snackbar.show({
                    title: this.props.error,
                    duration: Snackbar.LENGTH_LONG
                }) : null}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getOtpFailed: state.LoginReducer.getOtpFailed,
        error: state.LoginReducer.error,
        processingRequest: state.LoginReducer.processingRequest
    }
}

const mapDispatchToProps = {
    getOTPForUserName,
    resetError
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);