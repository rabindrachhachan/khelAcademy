import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    Modal,
    FlatList
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";

import I18n from '../../../../translation/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';



class Step4Screen extends Component {
    constructor(props) {
        super(props);
        this.state={
            isCategoryOpen: false,
            isSubCategoryOpen:false,
            categoryList:[{name:'Football', data:[{recordID:1, category:'Under 14'},{recordID:2, category:'Under 19'},{recordID:3, category:'Under 21'}]}],
            subCategoryList: [],
            selectedSubCategory: [],
            data: [],
            type: '',
            category:{},
            subCategory: [],
            showModal: false,

        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }

    openModal =(data,type)=>{
        this.setState({ data:data,showModal: true,type:type})
    }

    gotoNextStep = ()=>{
        this.props.navigation.navigate("step5",{title:`step 5: Date & Time `})
        // this.props.saveEventItem()
    }

    renderCategoryPicker = ()=>{
        let isActive = this.state.isCategoryOpen;
        return(
            <TouchableOpacity style={styles.expandableHeader} onPress={()=>this.openModal(this.state.categoryList,"category")}>
                <View style={styles.searchBarHeader}>
                    <Text style={[styles.text,{alignSelf: 'center',}]}>{this.state.category?this.state.category.name:"Event Category"}</Text>
                </View>
                <View style={styles.expandableIconHeader}>
                    <Icon name={isActive?"angle-up":"angle-down"} type="light" color="#BDBDBD" size={Platform.OS == 'ios' ? 25 : 20}></Icon>
                </View>
            </TouchableOpacity>
        )
    }

    renderSubCategoryPicker = ()=>{
        let isActive = this.state.isSubCategoryOpen;
        return(
            <TouchableOpacity style={styles.expandableHeader} onPress={()=>this.openModal(this.state.subCategoryList,"subCategory")}>
                <View style={styles.searchBarHeader}>
                    <Text style={[styles.text,{alignSelf: 'center',}]}>{this.state.subCategory?this.state.subCategory:"Event Sub-Category"}</Text>
                </View>
                <View style={styles.expandableIconHeader}>
                    <Icon name={isActive?"angle-up":"angle-down"} type="light" color="#BDBDBD" size={Platform.OS == 'ios' ? 25 : 20}></Icon>
                </View>
            </TouchableOpacity>
        )
    }

    addToList = (item)=>{
        let type = this.state.type;
        let selectedSubCategory = this.state.selectedSubCategory;
        let subCategoryList = this.state.subCategoryList;
        if(type ==='subCategory'){
            if(selectedSubCategory.length > 0){
                selectedSubCategory.map((category, index) => {
                    if (category.recordID === item.recordID) {
                        let msubCategoryList = subCategoryList.map(category => {
                            if(category.recordID ===item.recordID){
                                category["selected"] = false;
                                selectedSubCategory.splice(index,1)
                                return category
                            }
                            return category
                        })
    
                        this.setState({
                            selectedSubCategory:selectedSubCategory,
                            subCategoryList:msubCategoryList,
                            subCategory: selectedSubCategory.map(cat => cat.category).toString(),
                            
                        })
    
                    }else{
                        let msubCategoryList = subCategoryList.map(category => {
                            if(category.recordID ===item.recordID){
                                category["selected"] = true;
                                selectedSubCategory.push(category)
                                
                            }
                            return category
                        })
    
                        this.setState({
                            selectedSubCategory:selectedSubCategory,
                            subCategoryList:msubCategoryList,
                            subCategory: selectedSubCategory.map(cat => cat.category).toString(),
                        })
                    }
                })
                
            }else{
                let msubCategoryList = subCategoryList.map(category => {
                    if(category.recordID ===item.recordID){
                        category["selected"] = true;
                        selectedSubCategory.push(category)
                        return category
                    }else{
                        category["selected"] = false;
                        return category
                    }
                })

                this.setState({
                    selectedSubCategory:selectedSubCategory,
                    subCategoryList:msubCategoryList,
                    subCategory: selectedSubCategory.map(cat => cat.category).toString(),
                })
            }

        }else if(type ==='category'){
            let categoryList = this.state.categoryList;
            let filteredItem = categoryList.filter(subC => subC.name === item.name)
            this.setState({
                category: item,
                showModal: false,
                subCategoryList: filteredItem[0].data,
            })

        }
    }

    renderItem = ({item,index}) => {
        return (
            <TouchableOpacity 
                style={styles.filterLinkInner}
                onPress={() =>this.addToList(item)}>
                {this.state.type ==='category'?
                    <Text style={styles.filterText}>{item.name}</Text>:
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginStart:20}}>
                        <Icon name ={item.selected?'check-square':'square'} size ={16} type={'regular'} color= {'blue'} />
                        <Text style={styles.filterText}>{item.category}</Text>
                    </View>
                    

                }
            </TouchableOpacity>
        )
    }


    renderList = () => {
        return(
            <FlatList
                data={this.state.data}
                extraData={this.state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        )
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{marginTop:20,flex:1}}>
                    <View style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <Text style={styles.text} >{I18n.t("Event Category")}</Text>
                        {this.renderCategoryPicker()}
                    </View>
                    <View  style={{minHeight:100,width:'100%',marginHorizontal:15}}>
                        <Text style={styles.text} >{I18n.t("Event Sub-Category")}</Text>
                        {this.renderSubCategoryPicker()}
                    </View>
                </View>
                {this.state.showModal &&<Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({showModal:false})}>
                    <TouchableOpacity style={{ height: '100%',width:'100%',}} activeOpacity={1} onPressOut={()=> this.setState({showModal:false})}>
                        <View style={[styles.modalContainer2]}>
                            {this.state.data && this.state.data.length > 0 && this.renderList()}
                            <TouchableOpacity onPress={()=>this.setState({showModal:false})}> 
                                <Text style={styles.text}> {`Done`}</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Step4Screen);