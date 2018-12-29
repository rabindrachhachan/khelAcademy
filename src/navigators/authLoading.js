import React, { Component } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

class AuthLoadingScreen extends Component {

    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn: true,
        }
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(this.state.isLoggedIn ? "app" : "auth");
    
    };

    render() {
        return (
            <View> 
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.LoginReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(AuthLoadingScreen);