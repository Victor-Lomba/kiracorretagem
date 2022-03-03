import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext, ReactNode, useEffect } from "react";
import * as GoogleSignIn from "expo-google-sign-in";

type User = {
	id: string;
	name: string | undefined;
	email: string | undefined;
};

type AuthContextProviderProps = {
	children?: ReactNode;
};

type AuthContextType = {
	user: User | undefined;
	signIn: () => void;
	signOut: () => void;
	setUser: Dispatch<SetStateAction<User | undefined>>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<User>();

	async function initAsync() {
		await GoogleSignIn.initAsync();
		const userSilentSignIn = await GoogleSignIn.signInSilentlyAsync();
		if (userSilentSignIn) {
			const { email, uid, displayName } = userSilentSignIn;
			setUser({ email, id: uid, name: displayName });
		}
	}

	useEffect(() => {
		initAsync();
	}, []);

	async function signOut() {
		GoogleSignIn.signOutAsync();
		setUser(undefined);
	}

	async function signIn() {
		try {
			await GoogleSignIn.askForPlayServicesAsync();
			const { user: signInUser } = await GoogleSignIn.signInAsync();
			if (signInUser) {
				const { uid, email, displayName } = signInUser;
				setUser({ id: uid, email, name: displayName });
			}
		} catch (err) {
			alert(err);
		}
	}

	return (
		<AuthContext.Provider value={{ user, signIn, signOut, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
