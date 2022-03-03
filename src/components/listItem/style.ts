import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#0C2E50",
		borderRadius: 8,
		marginBottom: 20,
		minHeight: 80,
	},
	textContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	subTextContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	bannerimage: {
		width: "35%",
		height: "100%",
		borderRadius: 8,
	},
	test: {
		borderColor: "red",
		borderWidth: 1,
	},
	textWhite: {
		color: "white",
	},
	textBlack: {
		color: "black",
	},
	textOrange: {
		color: theme.colors.main,
	},
	information: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 5,
		paddingHorizontal: 5,
		backgroundColor: "white",
		borderRadius: 8,
	},
});
