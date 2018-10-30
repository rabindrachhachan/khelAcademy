import React, { Component } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import backGroundImage from "../../../assests/common/launchBg.jpg"
import logo from "../../../assests/common/logo.jpg"
import styles from "./styles"

class LoginScreen extends Component {    
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
                    <Text style={styles.text1}>{'Welcome to KhelAcademy'}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onGoToLoginButtonPressed}>
                    <Text style={styles.text1}> Next</Text>
                </TouchableOpacity>
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

export default connect(null,null)(LoginScreen);