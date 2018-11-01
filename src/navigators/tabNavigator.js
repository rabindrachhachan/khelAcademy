
import { createBottomTabNavigator } from "react-navigation";
import React, { Component } from "react";
import HomeStack from "../components/core/home/homeStack"

import styles from "./styles";
import { colors } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';


const TabNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "Home",
            title: "Home",
            tabBarVisible: navigation.state.index === 0,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" type="light" color={tintColor ? tintColor : "#BDBDBD"} size={24}></Icon>
            ),
        })
    },
},
    {
        initialRouteName: "Home",
        headerMode: 'float',
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        order: ["Home"],
        backBehavior: "initialRoute",
        tabBarOptions: {
            activeTintColor: colors.mediumseagreen,
            inactiveTintColor: colors.grey,
            activeLabelColor: colors.mediumseagreen,
            showLabel: true,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false,
            tabStyle: styles.tab,
            indicatorStyle: styles.indicator,
            iconStyle: styles.icon,
            style: styles.tabBar,
            header: styles.headerStyle,
            labelStyle: styles.label
        },
    });

export default TabNavigation;