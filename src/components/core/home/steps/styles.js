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
    },
    pickerStyle:{
        backgroundColor: 'transparent',
        borderBottomColor: '#D9D5DC',
        borderBottomWidth: 0.5,
        marginHorizontal: 15,
        marginVertical: 0,
        paddingVertical: 15,
        marginLeft: 20,                    
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickerIOS:{
        backgroundColor: 'red',
        borderBottomColor: 'grey',
        borderBottomWidth:0.5,
        marginHorizontal: 10,
        marginVertical: 0,
        marginLeft: 15,
    },
    rectangle:{
        height:100,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    box:{
        height:40,
        width:'45%',
        flexDirection:'row',
        borderColor:'grey',
        borderRadius:4,
        borderWidth:1,
        justifyContent:'space-evenly',
        alignItems:'center'

    }
});

export default styles;