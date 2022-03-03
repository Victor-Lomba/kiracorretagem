import { Image, View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import React from "react";
import style from "./style";
import houseImg from "../../public/images/casa.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";

type ListItemProps = RectButtonProps & {
	street: string;
	price: string;
	size: string;
	bathrooms: string;
	bedrooms: string;
};

export function ListItem({
	street,
	price,
	size,
	bathrooms,
	bedrooms,
	...props
}: ListItemProps) {
	return (
		<RectButton {...props} style={style.container}>
			<Image source={houseImg} style={style.bannerimage}></Image>
			<View style={style.textContainer}>
				<Text style={style.textWhite}>{street}</Text>
				<Text style={style.textOrange}>R$: {price}</Text>
				<View style={style.subTextContainer}>
					<View style={style.information}>
						<Icon
							name="bed"
							color="black"
							size={15}
							style={{ paddingRight: 5 }}
						/>
						<Text style={style.textBlack}>{bedrooms}</Text>
					</View>
					<View style={style.information}>
						<Icon
							name="bath"
							color="black"
							size={15}
							style={{ paddingRight: 5 }}
						/>
						<Text style={style.textBlack}>{bathrooms}</Text>
					</View>
					<View style={style.information}>
						<Text style={style.textBlack}>{size}m²</Text>
					</View>
				</View>
			</View>
		</RectButton>
	);
}
