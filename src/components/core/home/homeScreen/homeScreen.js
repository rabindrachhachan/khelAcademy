import React, { Component } from "react";
import {
    View,
    Text,
    Image,
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../../constants";
import Snackbar from 'react-native-snackbar';
import I18n from '../../../../translation/i18n'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Reporting from home screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
    
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);