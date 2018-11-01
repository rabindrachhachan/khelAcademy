import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import {colors} from "../../../constants";
import I18n from "../../../translation/i18n"

import backGroundImage from "../../../assests/common/launchBg.jpg"
import logo from "../../../assests/common/logo.jpg"
import styles from "./styles"

class LaunchScreen extends Component {    
    static navigationOptions = {
        title: "launch",
        header: null,
    }
    
    onGoToLoginButtonPressed = () => {
        this.props.navigation.navigate("login");
    }

    renderTopLogoContainer = () => {
        return (
            <View style={styles.topContainer}>
                <Image source={logo} style={styles.appLogo}/>
            </View>
        );
    }

    renderBottomContainer = () => {
        return (
            <View style={styles.bottomContainer}>  
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.text1}>{I18n.t('Welcome to KhelAcademy')}</Text>
                </View>
                <ActionButton 
                    buttonColor={'white'}
                    position ={'center'}
                    renderIcon={() =>
                        <Icon name="arrow-right" size={24} color={colors.lightseagreen} type='regular' />
                    }
                    onPress={this.onGoToLoginButtonPressed}>
                </ActionButton>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image 
                    source={backGroundImage} 
                    resizeMode='stretch' 
                    style={styles.backGround} 
                />
                {this.renderTopLogoContainer()}
                {this.renderBottomContainer()}
            </View>
        );
    }
}

export default connect(null,null)(LaunchScreen);