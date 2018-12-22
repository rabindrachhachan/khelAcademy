import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

import { colors } from "../../../../constants";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:colors.white,
    },
    itemView:{
		height: 44,
		flexDirection: 'row',
		backgroundColor: colors.white,
        borderColor:colors.grey,
    	borderWidth:0.5,
    },
    field1:{
        height: 44,
        width:'10%',
		flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleView:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor: colors.grey,
    },
    field2:{
        height: 44,
        width:'90%',
		flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text:{
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '300',
        fontFamily: 'roboto',
        color:  colors.grey,
        alignSelf: 'flex-start',
    },
    button: {
        height: 50,
        backgroundColor:colors.lightskyblue,
        margin: 0,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        alignSelf: 'center'
    },
    topContainer:{
        height:200,
        margin:15,
        borderColor:colors.grey,
        borderWidth:0.5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    topInnerContainer:{

    },
    image:{
        height:200,
        width:'100%',
    }
});

export default styles;