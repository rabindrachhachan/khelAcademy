import {
    StyleSheet,
    Dimensions
} from "react-native";

import { colors } from "./../../constants";

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width:'100%',
        backgroundColor:colors.white,
    },

    headerWrapper:{
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        elevation: 5,
        height:80
    },

    header: {
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        flexDirection: 'row',
        elevation: 5,
        height:59
    },
    headerTop:{
        height:20,
        alignSelf: 'stretch',
        backgroundColor:'#FA9917'
    },
    headerTopInnerTop:{
        height:2,
        marginTop:0,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    headerTopInnerBottom:{
        height:18,
        flexDirection: 'row',
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems:'center',
    },
    headerTopInnerText:{
        alignSelf: 'stretch',
        color:colors.white,
        fontFamily: 'roboto',
        fontSize: 10,
        fontStyle: 'italic',	
        fontWeight:'500',	
        lineHeight: 13,	
        textAlign: 'center',
        marginBottom:3.5,
        marginTop:1.5,
    },
    
    headerBottom:{
        height:1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        elevation: 2,
        opacity:1,
        backgroundColor:'transparent',
    },

    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerCenter: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenterIconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    title: {
        color: colors.mediumseagreen,
        fontSize: 18,
        alignSelf: 'flex-start',
        fontFamily: 'roboto',	
        lineHeight: 24,
        height:24
    },
    groupInfoText: {
        color: colors.grey,
        fontSize: 14,
        alignSelf: 'flex-start',
        fontFamily: 'roboto',	
        lineHeight: 16,
        height:16,
        fontWeight:'500'
    },

    headerTitleStyle:{
        fontFamily:'roboto',
        fontSize:18,
        fontWeight: '300',
        color: colors.mediumseagreen,
        lineHeight: 24
    },

    logo: {
        height: 30,
        width: 30
    },
    searchBar: {
        height: 40,
        alignSelf: 'stretch',
        color: colors.mediumseagreen,
        fontSize: 18
    },
    wrapper: {
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    iconText: {
        color: colors.mediumseagreen,
        fontWeight: 'bold',
        lineHeight: 22,
        fontSize: 22,
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingBottom: 3.5
    },
    plusWrapper: {
        position: 'absolute',
        height: 18,
        width: 18,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 3,
        borderWidth: 1,
        borderColor: colors.mediumseagreen,
        backgroundColor:colors.mediumseagreen
    },
    icon:{
		height: 24,
		width:  24,
		alignSelf: 'center'
    },
    teamContainer: {
        flex: 1,
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center'
	},
	teamBody:{
        height:30,
        width:30,
        borderRadius:15,
        backgroundColor: '#0097EB', 
        justifyContent:'center',
	},
	teamText:{
		textAlign: 'center', 
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 22,
        fontWeight: '400',
		alignContent: 'center', 
		justifyContent: 'center'
    },
    textInput:{
        alignSelf: 'stretch',
        fontFamily:'roboto',
        fontSize:14, 
        color:colors.grey 
    },
    topViewWrapper:{
        flex:1, 
        flexDirection:'column',
    },
    topView:{
        flex:5, 
        flexDirection:'row',
        borderBottomColor:colors.grey ,
        borderBottomWidth: 1, 
    },
    iconWrapper:{
        flex:1, 
        flexDirection:'column',
        alignItems:'center', 
        justifyContent:'center'
    },
    textWrapper:{
        flex:4, 
        flexDirection:'column',
        alignItems:'center', 
        justifyContent:'center'
    },
    bottomViewWrapper:{
        flex:9, 
        flexDirection:'column',
        margin:10
    },
    bottomView:{
        flex:6, 
        flexDirection:'column'
    },
    inputTextWrapper:{
        width: '100%',
        alignSelf: 'stretch',
    },
    bottomView2:{
        flex:3, 
        flexDirection:'column'
    },
    actionButtonWrapper:{
        flex:1, 
        flexDirection:'row',
        alignItems:'flex-end', 
        justifyContent:'flex-end'
    },
    headerRightIcon:{
        paddingRight:20
    },
    modalContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height:"70%",
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

});

export default styles;
