import {
    StyleSheet,
    Dimensions
} from "react-native";


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

    mainContainer: {
        height: '100%',
        width: '100%',
    },

    backGround: {
        position: 'absolute',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT
    },

    topContainer: {
        height: '75%',
        width: '100%',
        flexDirection: 'column',
        paddingVertical: '10%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    bottomContainer: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        paddingTop:10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button:{
        width:44,
        height: 44,
        borderColor: 'black', 
        borderRadius:22,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginBottom: 10
    },

    text1: {
        fontSize: 22,
        marginTop: 5
    },
    appLogo: {
        height: 80,
        width: 80
    }


});

export default styles;