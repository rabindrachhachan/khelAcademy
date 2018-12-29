import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import I18n from '../../../../translation/i18n';
import FilterMenu from "../../../common/filterMenu"


class Step3Screen extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible:false,
            city: null,
            venue: null,
            address: "",
            cityList: [{name:'Bangalore',venueList:[{venue:'Koramangala'}]}],
            venueList:[]
        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    searchVenue =(searchText)=>{
        let filter = [];
        let data = this.state.venueList;
        data.map(item => {
            if ((item.venue).toLowerCase().search(searchText.trim().toLowerCase()) > -1) {
                filter.push(item);
            }
        })
        if(searchText && filter.length > 0){
            this.setState({venueList:filter})
        }
    }

    toggleModal = ()=>{
        this.setState({modalVisible: !this.state.modalVisible})

    }

    setText =(item)=>{
        let venueList = item.venueList;
        let city = item.name;
        this.setState({venueList:venueList,city:city})
        this.toggleModal()
    }

    
    renderItem = ({item,index}) => {
        return (
            <TouchableOpacity 
                style={styles.filterLinkInner}
                onPress={() => this.setState({venue:item.venue,showVenueModal:false,venueList:this.state.venueList})}>
                <Text style={styles.filterText}>{item.venue}</Text>
            </TouchableOpacity>
        )
    }


    renderList = () => {
        return(
            <FlatList
                data={this.state.venueList}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        )
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
                        <TouchableOpacity onPress={()=>this.toggleModal()}> 
                            <Text style={styles.textInput}>{this.state.city?this.state.city: `Select City`}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <TextInput style={styles.textInput}
                            placeholder={I18n.t("Choose Venue Or Enter")}
                            underlineColorAndroid='transparent'
                            value={this.state.venue}
                            onChangeText={(text)=>{ 
                                this.searchVenue(text); 
                                this.setState({venue:text})
                            }}
                        />
                        {this.state.venueList.length>0 && this.renderList()}
                    </View>

                    <View  style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <TextInput style={styles.textInput}
                            placeholder="Address"
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
                <FilterMenu 
                    modalVisible={this.state.modalVisible}
                    data={this.state.cityList}
                    toggleModal={this.toggleModal}
                    setText ={this.setText}
                />
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