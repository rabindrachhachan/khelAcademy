import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { colors } from '../../../constants';
import HomeScreen from "./homeScreen/homeScreen";
import CreateScreen from "./createEvent/createEvent";
import Header from "../../common/header";
import styles from "../../common/styles";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";


const HomeStack = createStackNavigator({

    home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={'Home'} navigation ={navigation} leftIcon ={false}  addIcon ={false} rightIcon ={true}/>
        })
    },
    createEvent:{
        screen: CreateScreen,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={'Create Event'} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step1:{
        screen: Step1,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step2:{
        screen: Step2,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step3:{
        screen: Step3,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step4:{
        screen: Step4,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step5:{
        screen: Step5,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
        })
    },
    step6:{
        screen: Step6,
        navigationOptions: ({ navigation }) => ({
            header:<Header title={navigation.state.params.title} navigation ={navigation} leftIcon ={true}  addIcon ={false} rightIcon ={true}/>
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