import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../../constants";
import Snackbar from 'react-native-snackbar';
import I18n from '../../../../translation/i18n';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import backPattern from "../../../../assests/common/backPattern.png";

class Step3Screen extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: null,
            description: null

        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    onDescriptionChanged = (text)=>{
        this.setState({description: text})
    }
    onEventTitleChanged =(text)=>{
        this.setState({title: text})
    }

    gotoNextStep = ()=>{
        this.props.navigation.navigate("step4",{title:`step 4: Category `})
        // this.props.saveEventItem()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{marginTop:20,flex:1}}>
                    <View style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <Text style={styles.text} >{I18n.t("Event Title")}</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Add short clear name"
                            underlineColorAndroid='transparent'
                            onChangeText={this.onEventTitleChanged}
                        />
                    </View>
                    <View  style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <Text style={styles.text} >{I18n.t("Event Description")}</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Add short clear name"
                            underlineColorAndroid='transparent'
                            onChangeText={this.onDescriptionChanged}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.gotoNextStep()}>
                <Text style={styles.buttonText}>{I18n.t("Next")}</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3Screen);