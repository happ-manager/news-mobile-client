import { router } from "expo-router";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import CategoriesCarousel from "../../src/categories/components/categories-carousel";
import CategoriesNamesCarousel from "../../src/categories/components/categories-names-carousel";
import type { ProductFragment } from "../../src/products/gql/product.gql";
import useApp from "../../src/shared/hooks/use-app";
import { useCategoriesQuery } from "./gql/categories.gql";

const Categories = () => {
	const { setIsDark } = useApp();
	const { data } = useCategoriesQuery({ variables: {} });
	const [activeCategory, setActiveCategory] = useState<any>();

	const categories = data?.categories.data ?? [];

	const handleProductClick = (product: ProductFragment) => {
		router.push({ pathname: "products/product", params: { productId: product.id } });
	};

	const handleCategoryClick = (category: any) => {
		if (!category) {
			return;
		}

		const [previewProduct] = category.products;

		if (!previewProduct) {
			return;
		}

		setIsDark(previewProduct.isDark);
		setActiveCategory(category);
	};

	useEffect(() => {
		if (activeCategory || categories.length === 0) {
			return;
		}

		handleCategoryClick(categories[0]);
	}, [categories]);

	return (
		<View style={styles.view}>
			<CategoriesNamesCarousel
				activeCategory={activeCategory}
				categories={categories}
				handleCategoryClick={handleCategoryClick}
			/>
			<CategoriesCarousel
				activeCategory={activeCategory}
				categories={categories}
				handleProductClick={handleProductClick}
				handleCategoryClick={handleCategoryClick}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	view: { flex: 1 }
});

export default Categories;
