import React, { Component } from "react";
import { createSwitchNavigator,createStackNavigator,createDrawerNavigator } from "react-navigation"

import LaunchScreen from "../components/onBoarding/launch/launchScreen";
import LoginScreen from "../components/onBoarding/login/loginScreen";
import AuthenticateScreen from "../components/onBoarding/authenticate/authenticateScreen";

import TabNavigator from "./tabNavigator";
import AuthLoading from "./authLoading";


const AuthNavigator = createStackNavigator({
    launch: { screen: LaunchScreen },
    login: { screen: LoginScreen },
    otpAuthenticate:{ screen: AuthenticateScreen}
});

const AppNavigator = createDrawerNavigator({
    home: { screen: TabNavigator },
},
    {
        contentComponent: ({ navigation }) => {
            return null
        }
    }
);

const RootNavigator = createSwitchNavigator({
    authLoading: AuthLoading,
    auth: AuthNavigator,
    app: AppNavigator

}, {
        initialRouteName: "authLoading"
    });

export default RootNavigator;