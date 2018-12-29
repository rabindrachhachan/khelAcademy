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

class Step6Screen extends Component {
    constructor(props) {
        super(props);
        this.state={
            paidSelected:false,
            freeSelected: false,

        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    gotoNextStep = ()=>{
        this.props.navigation.navigate("step2",{title:`step 2: Images `})
        // this.props.saveEventItem()
    }

    toggleSwitch =(type)=>{
        if(type==='paid'){
            this.setState({paidSelected: true,freeSelected:false})
        }else{
            this.setState({paidSelected: false,freeSelected:true})
        }
    }


    renderSwitch =()=>{
        return(
            <View style={styles.topEventType}>
                <View style={{height:40,justifyContent:'center',alignItems:'flex-start',padding:15}}>
                    <Text style={styles.text}>{`Selected ticket type`}</Text>
                </View>
                <View style={{height:40,justifyContent:'space-between',alignItems:'flex-start',flexDirection:'row',padding:15}}>
                    <TouchableOpacity style ={{justifyContent:'center',alignItems:'flex-start',flexDirection:'row'}}   onPress={()=>this.toggleSwitch("free")}>
                        <Icon name ={this.state.freeSelected?'check-square':'square'} size ={16} type={'regular'} color= {'blue'} />
                        <Text style={[styles.text,{paddingStart:20}]}>{`Free Event`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style ={{justifyContent:'center',alignItems:'flex-start',flexDirection:'row',paddingStart:10}} onPress={()=>this.toggleSwitch("paid")}>
                        <Icon name ={this.state.paidSelected?'check-square':'square'} size ={16} type={'regular'} color= {'blue'} />
                        <Text style={[styles.text,{paddingStart:20}]}>{`Paid Event`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderFreeType =()=>{
        return(
            <View style={{flex:1}}>
                <View style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                    <TextInput style={styles.textInput}
                        placeholder={I18n.t("Ticket Name")}
                        underlineColorAndroid='transparent'
                        value={this.state.tName}
                        onChangeText={(text)=>this.setState({tName:text})}/>
                    <View style={styles.textInput}>
                        <Text style={styles.text}> {I18n.t("Ticket Price")}</Text>
                        <Text style={[styles.text,{paddingStart:5}]}>{`0`}</Text> 
                    </View>    
                    
                    <TextInput style={styles.textInput}
                        placeholder={I18n.t("Note")}
                        underlineColorAndroid='transparent'
                        value={this.state.tNote}
                        onChangeText={(text)=>this.setState({tNote:text})}/>
                    
                </View>
                <View>
                </View>
            </View>
        )
    }

    renderPaidType =()=>{
        return(
            <View style={{flex:1}}>
                <View style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                    <TextInput style={styles.textInput}
                        placeholder={I18n.t("Ticket Name")}
                        underlineColorAndroid='transparent'
                        value={this.state.tName}
                        onChangeText={(text)=>this.setState({tName:text})}/>
                    <TextInput style={styles.textInput}
                        placeholder={I18n.t("Ticket Price")}
                        underlineColorAndroid='transparent'
                        value={this.state.tPrice}
                        keyboardType={'numeric'}
                        onChangeText={(text)=>this.setState({tPrice:text})}/>
                    <TextInput style={styles.textInput}
                        placeholder={I18n.t("Note")}
                        underlineColorAndroid='transparent'
                        value={this.state.tNote}
                        onChangeText={(text)=>this.setState({tNote:text})}/>
                    
                </View>
                <View>
                </View>
            </View>
        )
    }

    renderIniatial =()=>{
        return(
            <View style={{flex:1}}>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderSwitch()}
                {this.state.paidSelected ?this.renderPaidType():this.state.freeSelected?this.renderFreeType(): this.renderIniatial()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step6Screen);