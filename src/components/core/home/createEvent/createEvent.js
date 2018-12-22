import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../../constants";
import Snackbar from 'react-native-snackbar';
import I18n from '../../../../translation/i18n';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import backPattern from "../../../../assests/common/backPattern.png";

class CreateScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    renderInitialHomeContent =()=>{
        return(
            <View style ={styles.bottomContainerItem}>
                <Text style={[styles.text,{marginVertical:20,color:colors.blackDark,fontSize:16,alignSelf:'center'}]}>
                {I18n.t("Welcome to KhelAcademy")}
                </Text>
                <Text style={[styles.text,{padding:15}]}>
                {I18n.t("info")}
                </Text>
                <TouchableOpacity onPress={()=>this.createEvent()} style={styles.button}>
                    <Text style={[styles.text,{color:colors.white,fontSize:16,alignSelf:'center'}]}> 
                        {I18n.t("CREATE NEW EVENT")}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderTopContainer = ()=>{
        return (
            <View style={styles.topContainer}>
                <Image source={backPattern} resizeMode={'cover'} />
                <View style={styles.chatImageView}>
                    <Text style={styles.text}>{'Create KhelAcademy Account'}</Text>
                </View>
            </View>
        );
    }

    createEvent = ()=>{
        this.props.navigation.navigate("createEvent",{})
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderTopContainer()}
                <View style ={styles.bottomContainer}>
                    {this.renderInitialHomeContent()}
                </View>
                <ActionButton 
                    buttonColor={colors.lightseagreen}
                    position ={'right'}
                    renderIcon={() =>
                        <Icon name="plus" size={24} color={'white'} type='regular' />
                    }
                    onPress={()=>this.createEvent()}>
                </ActionButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);