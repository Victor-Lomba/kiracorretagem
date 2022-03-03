import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
	RefreshControl,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { ListItem } from "../../components/listItem";
import { AuthContext } from "../../contexts/AuthContext";
import { theme } from "../../global/styles/theme";
import { firestore } from "../../services/firebase";

import style from "./style";

type DatabaseEntriesType = {
	id: string;
	bathrooms: number;
	neighborhood: string;
	bedrooms: number;
	area: number;
	street: string;
	price: number;
};

export function Search() {
	const [databaseEntries, setDatabaseEntries] =
		useState<DatabaseEntriesType[]>();
	const { user, signOut } = useContext(AuthContext);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const navigator = useNavigation();

	useEffect(() => {
		if (user) {
			navigator.navigate("SignIn");
		}

		DatabaseRequest();
	}, []);

	async function handleRefresh() {
		setIsRefreshing(true);
		await DatabaseRequest();
		setIsRefreshing(false);
	}

	async function DatabaseRequest() {
		const responses = await firestore.collection("houses").get();
		let temp: DatabaseEntriesType[] = [];
		responses.forEach(response => {
			temp.push({ ...response.data(), id: response.id } as DatabaseEntriesType);
		});

		setDatabaseEntries(temp);
	}

	return (
		<View style={style.container}>
			<View style={style.searchBarContainer}>
				<View style={style.searchBar}>
					<Icon name="search" color="#A1A1A1" style={{ padding: 5 }}></Icon>
					<TextInput
						style={{ flex: 1 }}
						placeholder="Pesquisar imóveis"
						placeholderTextColor="#A1A1A1"
					></TextInput>
				</View>

				<TouchableOpacity
					activeOpacity={0.7}
					style={style.filterIcon}
					onPress={signOut}
				>
					<Icon name="sliders" size={32} color="white"></Icon>
				</TouchableOpacity>
			</View>
			<FlatList
				refreshControl={
					<RefreshControl
						refreshing={isRefreshing}
						onRefresh={handleRefresh}
						colors={[theme.colors.main, "red"]}
						progressBackgroundColor={theme.colors.background}
					/>
				}
				style={style.list}
				keyExtractor={({ id }, index) => id}
				data={databaseEntries}
				renderItem={({ item }) => {
					return (
						<ListItem
							bathrooms={item.bathrooms.toString()}
							bedrooms={item.bedrooms.toString()}
							price={item.price.toString()}
							size={item.area.toString()}
							street={item.street}
						/>
					);
				}}
			></FlatList>
		</View>
	);
}
