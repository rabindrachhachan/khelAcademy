import {
    StyleSheet,
    Dimensions
} from "react-native";

import { colors } from "../constants";

const styles = StyleSheet.create({
	tab: {
		height:55,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingBottom: 5
	},
	indicator: {
		width: 0,
		height: 0,
	},
	label: {
		fontSize: 12,
		color: colors.grey,
	},
	icon: {
		height:20,
		width:20,
	},
	tabBar: {
		height:55,
		backgroundColor: "#F2F2F2",
		elevation: 8
	},
	chatIcon:{
		height:20,
		width:20,
		marginLeft: 5,
		marginRight: 5
	},
	taskIcon:{
		height:22,
		width:20,
		marginLeft: 5,
		marginRight: 5
	},
	headerStyle:{
		shadowOpacity: 0,
		shadowOffset: {
		    height: 0,
		},
		shadowRadius: 0,elevation: 0
	}
});

export default styles;