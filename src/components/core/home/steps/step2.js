import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
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
        super(props);
        this.state={
            data :[{step:1,name:'Basic Details'},{step:2,name:'Images'},{step:3,name:'Venue'}
        ,{step:4,name:'Category'},{step:5,name:'Date & Time'},{step:6,name:'Online Reversations'}]
        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    renderField1=(step)=>{
        return (
            <View style={styles.field1}>
                <View style={styles.circleView}>
                    <Text style ={[styles.text,{color:colors.white,alignSelf:'center',paddingTop:2}]}>{step}</Text>
                </View>
            </View>
        )
    }
    renderField2=(desc)=>{
        return (
            <View style={styles.field2}>
                <Text style ={[styles.text,{padding:15}]}>{desc}</Text>
            </View>
        )
    }

    renderItem =({item,index})=>{
        return(
            <TouchableOpacity style ={styles.itemView} key ={index} onPress={()=>this.gotoStep(item)}>
                {this.renderField1(item.step)}
                {this.renderField2(item.name)}
            </TouchableOpacity>
        )
    }

    gotoStep =(item)=>{
        switch(item.step){
            case 1:
                this.props.navigation.navigate('step1',{title:`{"step" ${item.step}}:${item.name}`})
            break;   
            case 2:
                this.props.navigation.navigate('step2',{title:`{"step" ${item.step}}:${item.name}`})
            break; 
            case 3:
                this.props.navigation.navigate('step3',{title:`{"step" ${item.step}}:${item.name}`})
            break;     
            case 4:
                this.props.navigation.navigate('step4',{title:`{"step" ${item.step}}:${item.name}`})
            break;     
            case 5:
                this.props.navigation.navigate('step5',{title:`{"step" ${item.step}}:${item.name}`})
            break;     
            case 6:
            this.props.navigation.navigate('step6',{title:`{"step" ${item.step}}:${item.name}`})
            break;
            default:
            break         
        }
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                {this.state.data && this.state.data.length > 0 &&
                    <View style={{marginTop:20,flex:1}}>
                        <FlatList 
                            data={this.state.data}
                            extraData={this.state}
                            listKey={(index) => 'D' + index.toString()}
                            keyExtractor={(index) => index}
                            renderItem={this.renderItem}
                        />
                    </View>
                }

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.gotoNext()}>
                <Text style={styles.buttonText}>{I18n.t("Get Started")}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);