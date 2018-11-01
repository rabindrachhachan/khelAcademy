import React, { Component } from "react";
import { createSwitchNavigator,createStackNavigator,createDrawerNavigator } from "react-navigation"

import LoadingScreen from "../components/common/loadingScreen";
import LaunchScreen from "../components/onBoarding/launch/launchScreen";
import LoginScreen from "../components/onBoarding/login/loginScreen";
import AuthenticateScreen from "../components/onBoarding/authenticate/authenticateScreen";


const AuthNavigator = createStackNavigator({
    launch: { screen: LaunchScreen },
    login: { screen: LoginScreen },
});

const AppNavigator = createDrawerNavigator({
    launch: { screen: LaunchScreen },
    login: { screen: LoginScreen },
    otpAuthenticate:{ screen: AuthenticateScreen}
},
    {
        contentComponent: ({ navigation }) => {
            return null
        }
    }
);

const RootNavigator = createSwitchNavigator({
    loading: LoadingScreen,
    auth: AuthNavigator,
    app: AppNavigator

}, {
        initialRouteName: "loading"
    });

export default RootNavigator;