import { Image } from "expo-image";
import { merge } from "lodash";
import React, { type FC } from "react";
import type { ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import Text from "../../../shared/components/text/text";
import type { CategoryFragment } from "../../gql/category.gql";
import themes from "./category-styles";

interface CategoryProps {
	category: CategoryFragment;
	categoryStyle?: ViewStyle;
	theme?: 1 | 2;
}

const Category: FC<CategoryProps> = (props) => {
	const { categoryStyle, theme, category } = props;
	const styles = merge({}, themes[theme], { category: categoryStyle });

	const source = require("../../../../assets/images/tag.png");

	return (
		<View style={styles.category}>
			{theme === 2 && <Image source={source} contentFit={"cover"} style={styles.image} />}

			<Text style={styles.name}>{category.name}</Text>
		</View>
	);
};

export default Category;
