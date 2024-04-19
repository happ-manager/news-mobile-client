import * as React from "react";
import { useEffect, useRef } from "react";
import { Animated, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import useApp from "../../shared/hooks/use-app";
import type { CategoryFragment } from "../gql/category.gql";

interface CategoriesNamesCarouselParams<T extends CategoryFragment> {
	activeCategory?: T;
	categories: T[];
	handleCategoryClick: (category: T) => void;
}

const CategoriesNamesCarousel = <T extends CategoryFragment>(props: CategoriesNamesCarouselParams<T>) => {
	const { handleCategoryClick, categories, activeCategory } = props;

	const { offsetY, isDark } = useApp();
	const headerY = useRef(new Animated.Value(0)).current; // начальное положение за пределами экрана
	const headerTranslateY = headerY.interpolate({
		inputRange: [0, 100],
		outputRange: [0, -50],
		extrapolate: "clamp"
	});
	const scrollViewRef = useRef<ScrollView>(null);

	useEffect(() => {
		if (activeCategory && scrollViewRef.current) {
			const index = categories.findIndex((category) => category.id === activeCategory.id);
			const position = index * 150;
			scrollViewRef.current.scrollTo({ x: position, animated: true });
		}
	}, [activeCategory, categories]);

	useEffect(() => {
		headerY.setValue(offsetY);
	}, [offsetY, headerY]);

	const activeBox = {
		backgroundColor: isDark ? "rgba(255, 255, 255, 0.10)" : "rgba(0, 0, 0, 0.10)"
	};

	const themeColor = {
		color: isDark ? COLORS.WHITE : COLORS.WHITE
	};

	return (
		<Animated.View style={[styles.categories, { transform: [{ translateY: headerTranslateY }] }]}>
			<ScrollView ref={scrollViewRef} horizontal={true} showsHorizontalScrollIndicator={false}>
				{categories.map((category) => (
					<TouchableOpacity
						style={[styles.category, activeCategory?.id === category.id && activeBox]}
						key={category.id}
						onPress={() => handleCategoryClick(category)}
					>
						<Text numberOfLines={1} textStyle={[styles.categoryText, themeColor]}>
							{category.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	categories: {
		position: "absolute",
		zIndex: 2,
		paddingHorizontal: 15,
		top: 100
	},
	category: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		paddingHorizontal: 15,
		paddingVertical: 5
	},
	categoryText: {
		fontSize: 16
	}
});

export default CategoriesNamesCarousel;
