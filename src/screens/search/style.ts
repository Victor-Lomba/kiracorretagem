import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "10%",
	},
	searchBarContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	filterIcon: {
		flex: 1,
		maxWidth: 50,
		backgroundColor: theme.colors.main,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBar: {
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		color: "white",
		padding: 10,
		marginRight: 20,
		flex: 1,
		borderWidth: 1,
		borderColor: "#072B4F",
		backgroundColor: "rgba(0,0,0,0.3)",
	},
	list: {
		marginTop: 20,
		width: "100%",
		flex: 1,
	},
});
