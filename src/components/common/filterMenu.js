import React, { Component } from "react";
import { Text, View, TouchableOpacity,Modal,FlatList} from "react-native";
import styles from './styles';


export default class FilterMenu extends Component {
    renderItem = ({item,index}) => {
        return (
            <TouchableOpacity 
                style={styles.filterLinkInner}
                onPress={() => this.props.setText(item)}>
                <Text style={styles.filterText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    renderList = () => {
        return(
            <FlatList
                data={this.props.data}
                extraData={this.props}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
            />
        )
    }

    
    render() { 
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => this.props.toggleModal()}>
                <TouchableOpacity style={{ height: '100%',width:'100%',}} activeOpacity={1} onPressOut={()=> this.props.toggleModal()}>
                    <View style={[styles.modalContainer]}>
                        {this.props.data && this.renderList()}
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}