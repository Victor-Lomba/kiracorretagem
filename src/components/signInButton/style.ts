import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export default StyleSheet.create({
	button: {
		width: 260,
		height: 64,
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
	},
	white: {
		color: "white",
	},
	textContainer: {
		fontFamily: "Raleway_700Bold",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	iconContainer: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		aspectRatio: 1,
		borderRightWidth: 1,
		borderRightColor: "rgba(255,255,255,0.3)",
	},
	appleText: {
		fontFamily: "Raleway_700Bold",
		fontSize: 16,
	},
	googleText: {
		fontFamily: "Raleway_700Bold",
		fontSize: 16,
		color: "white",
	},
});
