import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { Platform, Text, View } from "react-native";
import style from "./style";
import { theme } from "../../global/styles/theme";

export function SignInButton(props: RectButtonProps) {
	const ios = Platform.OS === "ios";
	return (
		<RectButton
			{...props}
			style={{
				backgroundColor: ios ? "white" : theme.colors.google,
				...style.button,
			}}
		>
			{ios ? (
				<>
					<View style={style.iconContainer}>
						<Icon name="apple1" size={30}></Icon>
					</View>

					<Text style={style.appleText}>Entre com a Apple</Text>
				</>
			) : (
				<>
					<View style={style.iconContainer}>
						<Icon name="google" size={30} style={style.white}></Icon>
					</View>
					<View style={style.textContainer}>
						<Text style={style.googleText}>Entre com o Google</Text>
					</View>
				</>
			)}
		</RectButton>
	);
}
