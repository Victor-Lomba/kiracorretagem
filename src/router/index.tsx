import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContextProvider } from "../contexts/AuthContext";

import { AppRoutes } from "./app.routes";

export function Router() {
	return (
		<AuthContextProvider>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</AuthContextProvider>
	);
}
