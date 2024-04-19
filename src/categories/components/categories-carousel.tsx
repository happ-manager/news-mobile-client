import * as React from "react";
import { useEffect, useRef } from "react";
import Carousel from "react-native-reanimated-carousel";

import type { ProductFragment } from "../../products/gql/product.gql";
import SCREEN from "../../shared/constants/screen";
import type { CategoryWithProductsFragment } from "../gql/category.gql";
import Category from "./category";

interface CategoriesCarouselParams<T extends CategoryWithProductsFragment> {
	activeCategory?: T;
	handleProductClick: (product: ProductFragment) => void;
	handleCategoryClick: (category: T) => void;
	categories: T[];
}

const CategoriesCarousel = <T extends CategoryWithProductsFragment>(props: CategoriesCarouselParams<T>) => {
	const { handleProductClick, handleCategoryClick, categories, activeCategory } = props;

	const carouselRef = useRef<any>(null);

	useEffect(() => {
		if (!activeCategory) {
			return;
		}

		const index = categories.findIndex((category) => category.id === activeCategory.id);

		if (index !== -1 && carouselRef.current) {
			carouselRef.current.scrollTo({ index });
		}
	}, [activeCategory, categories]);

	return (
		<Carousel
			ref={carouselRef}
			loop
			width={SCREEN.WIDTH}
			height={SCREEN.HEIGHT}
			data={categories}
			scrollAnimationDuration={500}
			onSnapToItem={(index) => handleCategoryClick(categories[index])}
			renderItem={({ item }) => (
				<Category key={item.id} category={item} handleProductClick={handleProductClick}></Category>
			)}
		/>
	);
};

export default CategoriesCarousel;
