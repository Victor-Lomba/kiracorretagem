import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: theme.colors.background,
	},
	houseImg: {
		width: "100%",
	},
	title: {
		color: "white",
		fontSize: 36,
		fontFamily: "Raleway_700Bold",
		marginBottom: 32,
	},
	white: {
		color: "white",
	},
	yellow: {
		color: theme.colors.main,
	},
	registerButton: {
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
