import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import React, { useContext, useEffect } from "react";

import HouseImg from "../../../assets/House.png";
import { useNavigation } from "@react-navigation/native";

import style from "./style";
import { SignInButton } from "../../components/signInButton";
import { AuthContext } from "../../contexts/AuthContext";

export function SignIn() {
	const navigation = useNavigation();
	const { signIn, signOut, user, setUser } = useContext(AuthContext);
	function handleRegisterClick() {
		Linking.openURL(
			"whatsapp://send?phone=5522999885658&text=ola%2C%20desejo%20cadastrar%20um%20imovel"
		);
	}

	useEffect(() => {
		if (user) {
			navigation.navigate("Search");
		}

		databaseRequest();
	}, [user]);

	async function databaseRequest() {}

	async function GoogleSignIn() {
		await signIn();
	}

	return (
		<View style={style.container}>
			<Image source={HouseImg} style={style.houseImg}></Image>
			<Text style={style.title}>
				ENCONTRE O {"\n"}IMÓVEL DOS {"\n"}SEUS SONHOS
			</Text>

			<SignInButton onPress={GoogleSignIn}></SignInButton>
			<View style={style.registerButton}>
				<Text style={style.white}>Deseja cadastrar um imóvel? </Text>
				<TouchableOpacity
					onPress={() => {
						setUser(user);
					}}
				>
					<Text style={style.yellow}>Clique Aqui!</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
