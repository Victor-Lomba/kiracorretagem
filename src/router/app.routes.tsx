import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../screens/signIn";
import { Search } from "../screens/search";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	const { user } = useContext(AuthContext);
	return (
		<Navigator headerMode="none">
			{!user && <Screen name="signIn" component={SignIn} />}
			{user && <Screen name="Search" component={Search} />}
		</Navigator>
	);
}
