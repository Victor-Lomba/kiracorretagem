import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../screens/signIn";
import { Home } from "../screens/home";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	return (
		<Navigator headerMode="none">
			<Screen name="signIn" component={SignIn} />
		</Navigator>
	);
}
