import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    Animated,
    ActionSheetIOS
} from "react-native";

import { connect } from "react-redux"
import styles from "./styles";
import { colors } from "../../../../constants";
import Snackbar from 'react-native-snackbar';
import I18n from '../../../../translation/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "react-native-js-bottom-sheet";



class Step2Screen  extends Component {
    constructor(props) {
        super(props);
        this.state={
            path: null,
            overflow: "hidden" ,
            
        }
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
        
    }


    _startAnimation = () => {
		Animated.sequence([
			Animated.timing(this.state.height, {
				toValue: 0,
				duration: 250
			}),
			Animated.timing(this.state.height, {
				toValue: 150,
				duration: 500,
				delay: 75
			})
		]).start();
	};



	_getImageFromStorage = (value) => {
        this.setState({
                path: value, 
                overflow: "hidden" 
            }, () =>{
                if(Platform.OS !== "ios") this.bottomSheet.close();
                this._startAnimation()
            });
        
        this.props.updateValue(this.props.attributes.name, value);
    };
    
    _openCamera =()=>{
        ImagePicker.openCamera({
            compressImageMaxWidth:360,
            compressImageMaxHeight:360,
            compressImageQuality: 1.0,
            includeBase64: true,
        }).then(image =>
            this._getImageFromStorage(image.path)
        ).catch(e => {
            if(Platform.OS !== "ios") this.bottomSheet.close();
            console.log(e)
        }) 
    }
    _openPicker =()=>{
        ImagePicker.openPicker({
            compressImageMaxWidth:360,
            compressImageMaxHeight:360,
            compressImageQuality: 1.0,
            includeBase64: true,
        }).then(image =>
            this._getImageFromStorage(image.path)
        ).catch(e => {
            if(Platform.OS !== "ios") this.bottomSheet.close();
            console.log(e)
        }) 
    }

    renderPreview =(attributes) => {
        if(typeof this.props.path !=='undefined' && this.props.path !=='null'){
            this._startAnimation()
        }
		return (
			<TouchableOpacity style={[styles.topContainer,{ borderColor:"#a94442" }]}
				onPress={
					Platform.OS === "ios"
						? this._onPressImage
						: () => this.bottomSheet.open()
				}>
				<Animated.Image
					resizeMode="cover"
					source={{ uri:this.props.path? this.props.path: this.state.path}}
					style={[styles.image,{height: this.state.height}]}
				/>
				<View style={[styles.topInnerContainer,{overflow: this.state.overflow}]}>
                    <Text style={[styles.buttonText,{color:colors.lightskyblue}]}>{I18n.t("Upload Image")}</Text>
				</View>
			</TouchableOpacity>
		);
    };

    _renderOptions = () => {
        const options =["Open camera","Select from the gallery","Cancel"];
    
		return [
            {
				title: options[0],
                onPress: () => this._openCamera(),
                icon: (<Icon name="camera" size={24} type={'regular'} color ={'#828282'}/>)
			},
			{
				title: options[1],
				onPress: () =>this._openPicker(),
				icon: ( <Icon name="image" size={24} type={'regular'} color ={'#828282'}/>)
			}
		];
	};

    _onPressImage = () => {
		const options = this.props.options.config.options || this.defaultProps.options;
		ActionSheetIOS.showActionSheetWithOptions({ options, cancelButtonIndex: 2},
			buttonIndex => {
				if (buttonIndex === 0) {
					this._openCamera()
				} else if (buttonIndex === 1) {
					this._openPicker()
				}
			}
		);
    }

    gotoNextStep = ()=>{
        this.props.navigation.navigate("step3",{title:`step 3: Venue `})
        // this.props.saveEventItem()
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{marginTop:20,flex:1}}>
                    {this.renderPreview()}
                </View>
                {Platform.OS === "android" ? (
                    <BottomSheet
                        ref={ref => {
                            this.bottomSheet = ref;
                        }}
                        title={'Choose image from'}
                        options={this._renderOptions()}
                        coverScreen={true}
                        titleFontFamily={styles.titleFontFamily}
                        styleContainer={styles.styleContainer}
                        fontFamily={styles.fontFamily}
                    />
                ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step2Screen);