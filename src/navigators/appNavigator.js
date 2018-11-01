import React, { Component } from "react";
import { createSwitchNavigator,createStackNavigator,createDrawerNavigator } from "react-navigation"

import LoadingScreen from "../components/common/loadingScreen";
import LaunchScreen from "../components/onBoarding/launch/launchScreen";
import LoginScreen from "../components/onBoarding/login/loginScreen";
import AuthenticateScreen from "../components/onBoarding/authenticate/authenticateScreen";

import TabNavigator from "./tabNavigator";


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
    loading: LoadingScreen,
    auth: AuthNavigator,
    app: AppNavigator

}, {
        initialRouteName: "loading"
    });

export default RootNavigator;