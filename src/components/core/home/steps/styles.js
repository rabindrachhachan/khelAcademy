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
    },
    modalContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top:'0%',
        width: '90%',
        height:"25%",
        backgroundColor: 'white',
        borderColor: '#E0E0E0',
        borderRadius: 5,
        shadowColor: "#E0E0E0",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowRadius: 1.61,
        elevation: 8,
        borderWidth:1,
        borderTopColor: '#0089F8',
        borderTopWidth: 2,
    },

    filterLinkInner: {
        marginTop:10,
        height:30,
        alignSelf: 'stretch',
        backgroundColor:colors.white,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    filterText: {
        width:'100%',
        alignSelf:'stretch',
        color:colors.grey,
        fontFamily: 'roboto',
        fontSize: 12,
        lineHeight: 14,
        paddingLeft:15,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: colors.blacklight,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'

    },
    searchBarHeader:{
        height:30,
        width:'80%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:5,
        borderRadius:1,
        paddingLeft:15,
        borderColor:'black',
        
    },
    expandableIconHeader:{
        height:30,
        width:'20%',
        flexDirection:'row',
        marginEnd:15,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
    
    },
    expandableHeader:{
        marginTop:10,
        height:40,
        width:'100%',
        flexDirection:'row',
        elevation:1,
        shadowOpacity:0,
        backgroundColor: '#fff',
		shadowRadius: 0,
        shadowColor: colors.MD_LIGHT_GREY_100,
		shadowOffset: { height: 2, width:4 },
		opacity: 1 ,
		elevation:2,
		borderColor: Platform.OS =='ios' ? colors.MD_LIGHT_GREY_100 : 'white',
        borderWidth: Platform.OS =='ios' ? 1 : 0,
        marginBottom:10
    },

    modalContainer2: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top:'25%',
        width: '90%',
        height:"75%",
        marginHorizontal:'5%',
        backgroundColor: 'white',
        borderColor: '#E0E0E0',
        borderRadius: 5,
        shadowColor: "#E0E0E0",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowRadius: 1.61,
        elevation: 8,
        borderWidth:1,
        borderTopColor: '#0089F8',
        borderTopWidth: 2,
    },
    topEventType:{
        height:80,
        justifyContent:'space-between',
        alignItems:'flex-start',
        borderBottomColor:'#E0E0E0',
        borderBottomWidth:0.5,
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowRadius: 1.61,
        elevation:2,
        shadowColor: "#E0E0E0",
    }

});

export default styles;