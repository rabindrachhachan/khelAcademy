
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { colors } from "../../constants";
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import backIcon from "../../assests/common/back_icon.png"

const OFFLINE_MODE = "Offline Mode";
const ONLINE_MODE = "Online Mode";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state ={
			isSyncing: false,
		}
	}
	
	renderHeaderTopOnline=()=>{
		if(this.state.isSyncing){
			return(
				<View style={[styles.headerTop,{backgroundColor:colors.mediumseagreen}]}>
					<View style={[styles.headerTopInnerTop,{backgroundColor:colors.mediumseagreen}]}>
					</View>
					<View style={styles.headerTopInnerBottom}>
						<Text style={styles.headerTopInnerText}>{`${ONLINE_MODE}| ${'data syncing'}`} </Text>
						<Icon 
							name={'sync'}
							color={colors.white}
							size={10}
							type="regular" 
						/>
					</View>
				</View>
			)
		}
		return null
	}

	renderHeaderTopOffline =()=>{
		return(
			<View style={[styles.headerTop,{backgroundColor:'orange'}]}>
				<View style={[styles.headerTopInnerTop,{backgroundColor:'orange'}]}>
				</View>
				<View style={styles.headerTopInnerBottom}>
					<Text style={[styles.headerTopInnerText,{marginEnd:5}]}>{`${OFFLINE_MODE}`} </Text>
					<Icon 
						name={'wifi-slash'}
						color={colors.white}
						size={12}
						type="regular" 
					/>
				</View>
			</View>
		)
	}

	renderHeaderBottom =()=><View style={styles.headerBottom}></View>
	


	renderHeaderLeftIcon = ()=>{
		return (
			<TouchableOpacity 
				style={styles.headerLeft} 
                onPress={() => 
                    this.props.navigateTo?this.props.navigation.navigate(this.props.navigateTo)
                    :this.props.navigation.goBack(null) 
                }>
				<Image
                    style={styles.icon}
                    source={backIcon}
                    tintColor={colors.PRIMARY_FONT_COLOR}
                />
			</TouchableOpacity>
		)
	}

	renderHeaderLeftDrawer = () => {
		return (
			<TouchableOpacity 
				style={styles.headerLeft} 
				onPress={() =>this.props.navigation.openDrawer()}>
				<Text>KH</Text>
            </TouchableOpacity>
		);
	};

	renderHeaderRight = () => {
		return (
			<View style={styles.headerRight}>
                <TouchableOpacity 
                    style={styles.headerRightIcon} 
                    onPress={() => this.props.navigation.navigate('reportIssue')}>
					<Icon 
						color={colors.blackDark} 
						name={'ellipsis-v'}
						size={22}
						type="regular" 
					/>
				</TouchableOpacity>
			</View>
		);
	};

	renderHeaderCenter = (title) => {		
		return (
			<TouchableOpacity style={styles.headerCenter} >
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity>
		)
	};


	render() {
		return (
			<View style={[styles.headerWrapper,{height:!(this.props.isConnected)|| this.state.isSyncing?80:60}]}>
				{this.props.isConnected?this.renderHeaderTopOnline():this.renderHeaderTopOffline()}
				<View style={styles.header}>
					{this.props.leftIcon?this.renderHeaderLeftIcon():this.renderHeaderLeftDrawer()}
					{this.props.title?this.renderHeaderCenter(this.props.title):null}
					{this.props.rightIcon?this.renderHeaderRight(): null}
				</View>
				{this.renderHeaderBottom()}
			</View>
			
		);
	}
}


const mapStateToProps = (state) => {
	return {
		isConnected : state.network.isConnected,
	}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);