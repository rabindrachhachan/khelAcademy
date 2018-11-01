import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { colors } from '../../../constants';
import HomeScreen from "./homeScreen/homeScreen";
import Header from "../../common/header";
import styles from "../../common/styles"



const HomeStack = createStackNavigator({

    home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={'Home'} navigation ={navigation} leftIcon ={false}  addIcon ={false} rightIcon ={true}/>
        })
    },

},
    {
        initialRouteName: "home",
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle:styles.headerStyle,
            headerTitleStyle:styles.headerTitleStyle,
            headerTintColor: colors.mediumseagreen
        })
    }
);

export default HomeStack;