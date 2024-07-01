import { useRouter } from "expo-router";
import type { FC } from "react";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import Category from "../../src/categories/components/category/category";
import Button from "../../src/shared/components/button/button";
import BUTTON_THEMES from "../../src/shared/components/button/button-themes";
import Text from "../../src/shared/components/text/text";
import TEXT_THEMES from "../../src/shared/components/text/text-themes";
import COLORS from "../../src/shared/constants/colors";
import ROUTES from "../../src/shared/constants/routes";
import { useCategoriesQuery } from "./gql/categories.gql";

const Categories: FC = () => {
	const router = useRouter();
	const { data } = useCategoriesQuery();

	const categories = data?.categories.data ?? [];

	const handleCategoryClick = () => {
		router.navigate(ROUTES.ARTICLES);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text theme={TEXT_THEMES.TITLE}>Articles Tags</Text>
				<Text theme={TEXT_THEMES.DESCRIPTION}>
					Please select your favourites tags so AI can suggest the articles based on that{" "}
				</Text>

				<View style={styles.categories}>
					{categories.map((category, index) => (
						<TouchableOpacity key={index} onPress={() => handleCategoryClick()}>
							<Category theme={2} category={category} categoryStyle={index % 2 ? styles.categoryMargin : {}} />
						</TouchableOpacity>
					))}
				</View>
			</View>

			<View style={styles.buttons}>
				<Button buttonStyle={styles.button} theme={BUTTON_THEMES.OUTLINED_BUTTON} text="Пропустить"></Button>
				<Button buttonStyle={styles.button} theme={BUTTON_THEMES.BLACK_BUTTON} text="Подтвердить"></Button>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: { flex: 1 },
	container: { padding: 24 },
	categories: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		rowGap: 25,
		marginTop: 20
	},
	categoryMargin: {
		marginTop: 32
	},
	buttons: {
		flexDirection: "row",
		columnGap: 10,
		padding: 18,
		backgroundColor: COLORS.WHITE
	},
	button: {
		flex: 1
	}
});

export default Categories;
