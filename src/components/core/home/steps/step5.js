import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Platform, 
    DatePickerIOS, 
    DatePickerAndroid, 
    TouchableOpacity, 
    TimePickerAndroid,
    Modal, 
    TouchableHighlight
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../../constants";
import Snackbar from 'react-native-snackbar';
import I18n from '../../../../translation/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import Panel from './panel';
const moment = require("moment");


class Step5Screen extends Component {
    constructor(props) {
        super(props);
        this.state={        
            modalVisible: false,
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,
            mode: 'date',
            field:'',
            timeZoneOffsetInHours:1
        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    onDateChange(date) {
        let field = this.state.field;
        switch(field){
            case 'startDate':
                this.setState({startDate: date})
            break;
            case 'startTime':
                this.setState({startTime: date})
            break;
            case 'endDate':
                this.setState({endDate: date})
            break;
            case 'endTime':
                this.setState({endTime: date})
            break;
            default:
            break
        }
    }

    setModalVisible(mode,visible,text) {
        this.setState({
            modalVisible: visible,
            mode:mode,
            field:text
        });
    }


    showDatePicker = async (stateKey) => {
        const currentDate =  new Date();
        try {
            const { action, year, month, day } = await DatePickerAndroid.open(
                {  
                    date: currentDate,
                }
            );
            if (action !== DatePickerAndroid.dismissedAction) {
                const currentHour = currentDate.getHours();
                const currentMinutes = currentDate.getMinutes();
                const date = new Date(year, month, day);
                if (currentHour) {
                    date.setHours(currentHour);
                }
                if (currentMinutes) {
                    date.setMinutes(currentMinutes);
                }

                this.setState({field:stateKey})
                this.onDateChange(date);
            }
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };

    showTimePicker = async (stateKey) => {
        this.setState({field:stateKey})
        const currentDate =  new Date();
        try {
            const { action, minute, hour } = await TimePickerAndroid.open({
                hour: currentDate.getHours(),
                minute: currentDate.getMinutes(),
            });
            if (action === TimePickerAndroid.timeSetAction) {
                const date = currentDate;
                date.setHours(hour);
                date.setMinutes(minute);

                this.setState({field:stateKey})
                this.onDateChange(date);
            }
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };

    renderIOSDatePicker = () => {
        const { startDate,startTime,endDate,endTime } = this.state;

        return (
            <View style={styles.pickerIOS}>
                <View >
                    <Text  style={{ color: '#ADADAD',paddingStart:5 }}> Starts On:</Text>
                    <View style ={styles.rectangle}>
                        <TouchableOpacity onPress={() =>this.setModalVisible('date',true,'startDate')} style ={styles.box}>
                            <Icon name={'calendar-week'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5,width:'25%',alignSelf:'center' }}>
                                {( startDate && moment( startDate, "Do MMM YYYY").format("Do MMM YYYY")) || "Start On"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.setModalVisible('time',true,'startTime')} style ={styles.box}>
                            <Icon name={'clock'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5,width:'25%' ,alignSelf:'center'}}>
                                {(startTime&& moment(startTime, 'hh:mm a').format("hh:mm a")) || "Start At"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text  style={{ color: '#ADADAD',paddingStart:5 }}> Ends On:</Text>
                    <View style ={styles.rectangle}>
                        <TouchableOpacity onPress={() =>this.setModalVisible('date',true,'endDate')} style ={styles.box}>
                            <Icon name={'calendar-week'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5, width:'25%',alignSelf:'center'}}>
                                {(endDate && moment(endDate, "Do MMM YYYY").format("Do MMM YYYY")) || "Start On"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.setModalVisible('time',true,'endTime')} style ={styles.box}>
                            <Icon name={'clock'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5,width:'25%' ,alignSelf:'center'}}>
                                {(endTime && moment(endTime, 'hh:mm a').format("hh:mm a")) || "Start At"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Panel
                    ref={(c) => { this.panel = c; }}>
                    <DatePickerIOS
                        date={new Date()}
                        mode={this.state.mode}
                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                        onDateChange={this.onDateChange}
                    />
                </Panel>
            </View>
        );
    }

    renderAndroidDatePicker = () => {
        const { startDate,startTime,endDate,endTime } = this.state;
        return (
            <View>
                <View>
                    <Text  style={{ color: '#ADADAD',paddingStart:5 }}> Starts On:</Text>
                    <View style ={styles.rectangle}>
                        <TouchableOpacity onPress={()=>this.showDatePicker('startDate')} style ={styles.box}>
                            <Icon name={'calendar-star'} size={16} type ={'light'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5 }}>
                                {(startDate && moment(startDate, "Do MMM YYYY").format("Do MMM YYYY")) || "Start On" }
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.showTimePicker('startTime')} style ={styles.box}>
                            <Icon name={'clock'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5 }}>
                                {(startTime && moment(startTime, 'hh:mm a').format("hh:mm a")) || "Start At"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text  style={{ color: '#ADADAD',paddingStart:5 }}> Ends On:</Text>
                    <View style ={styles.rectangle}> 
                        <TouchableOpacity onPress={()=>this.showDatePicker('endDate')} style ={styles.box}>
                            <Icon name={'calendar-star'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5 }}>
                                {(endDate && moment(endDate, "Do MMM YYYY").format("Do MMM YYYY")) || "Start On"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.showTimePicker('endTime')} style ={styles.box}>
                            <Icon name={'clock'} size={16} type ={'regular'} color ={'orange'} />
                            <Text  style={{ color: '#ADADAD',paddingStart:5 }}>
                                {(endTime && moment(endTime, 'hh:mm a').format("hh:mm a")) || "Start At"}
                            </Text>
                            <Icon name={'angle-down'} size={16} type ={'light'} color ={'orange'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        );
    }

    gotoNextStep = ()=>{
        this.props.navigation.navigate("step6",{title:`step 6: Online Reversations `})
        // this.state.saveEventItem()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{marginTop:20,flex:1}}>
                {(Platform.OS === 'ios') ? this.renderIOSDatePicker() : this.renderAndroidDatePicker()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step5Screen);