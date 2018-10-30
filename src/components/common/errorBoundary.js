import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions
} from "react-native";


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <View style={{backgroundColor:'white',width:DEVICE_WIDTH, height: DEVICE_HEIGHT-100, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{alignItems: 'center',flexDirection: 'column'}}>
                    <Text style={{fontSize: 20, color: '#BDBDBD'}}> Something went wrong. </Text>
                </View>
            </View>
            );
        }
        else
            return this.props.children
    }
}

export default ErrorBoundary