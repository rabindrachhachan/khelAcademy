import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

import { colors } from "../../../constants";

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    topContainer: {
        flex: 0.6,
        flexDirection: 'column',
        paddingVertical: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    bottomContainer: {
        flex: 0.4,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    flexLarge: {
        flex: Platform.OS == 'ios' ? 2 : 0.4
    },

    textInput: {
        width: '100%',
        height: 40,
        borderColor: colors.blackLight,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    button: {
        width: '48%',
        height: 40,
        borderColor: 'black',
        borderRadius: 30,
        // backgroundColor:colors.primaryFontColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'

    },

    text1: {
        fontSize: 12,
        color: colors.mediumseagreen,
        backgroundColor: 'transparent',
        paddingHorizontal:5

    },
    text:{
        fontSize: 12,
        color:colors.blackLight,
        backgroundColor: 'transparent'
    },
    textViewWrapper:{
        flexDirection:'row',
        marginBottom:5,
    }

});

export default styles;