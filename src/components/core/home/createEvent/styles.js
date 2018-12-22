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

    topContainer: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    bottomContainer: {
        flex: 0.7,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
    },
    bottomContainerItem:{
        height: 200,
		backgroundColor: colors.white,
		shadowOpacity:0,
		shadowRadius: 0,
		margin: 5,
		shadowColor: colors.grey,
		shadowOffset: { height: 2, width: 4 },
		opacity: 1 ,
        elevation:2,
		borderColor: Platform.OS =='ios' ? colors.grey: 'white',
        borderWidth: Platform.OS =='ios' ? 1 : 0,
        borderStyle:'solid'
    },
    button: {
        height: 36,
        width:'100%',
        backgroundColor:colors.mediumseagreen,
        borderColor: '#48BBEC',
        marginBottom:0,
        position:'absolute',
        marginTop:164,
        alignSelf: 'stretch',
        alignItems:'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '300',
        fontFamily: 'roboto',
        color:  colors.grey,
        alignSelf: 'flex-start',
    },
    chatImageView: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;