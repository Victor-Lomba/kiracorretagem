import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";

import HouseImg from "../../../assets/House.png";

import style from "./style";
import { SignInButton } from "../../components/signInButton";

export function SignIn() {
	function handleRegisterClick() {
		Linking.openURL(
			"whatsapp://send?phone=5522999885658&text=ola%2C%20desejo%20cadastrar%20um%20imovel"
		);
	}

	return (
		<View style={style.container}>
			<Image source={HouseImg} style={style.houseImg}></Image>
			<Text style={style.title}>
				ENCONTRE O {"\n"}IMÓVEL DOS {"\n"}SEUS SONHOS
			</Text>

			<SignInButton></SignInButton>
			<View style={style.registerButton}>
				<Text style={style.white}>Deseja cadastrar um imóvel? </Text>
				<TouchableOpacity onPress={handleRegisterClick}>
					<Text style={style.yellow}>Clique Aqui!</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
