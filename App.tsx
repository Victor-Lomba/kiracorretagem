import React from "react";
import { SignIn } from "./src/screens/signIn";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar, View } from "react-native";
import { Router } from "./src/router";

export default function App() {
	const [fontsLoaded] = useFonts({ Raleway_700Bold });

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<>
			<StatusBar
				backgroundColor="transparent"
				translucent
				barStyle="light-content"
			></StatusBar>
			<Router />
		</>
	);
}
