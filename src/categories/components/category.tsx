import { BlurView } from "expo-blur";
import * as React from "react";
import { useRef, useState } from "react";
import { Animated, Pressable, ScrollView, StyleSheet, View } from "react-native";

import useNewOrder from "../../orders/hooks/use-new-order";
import ProductCard from "../../products/components/product-card";
import ProductPreview from "../../products/components/product-preview";
import type { ProductFragment } from "../../products/gql/product.gql";
import Tappable from "../../shared/components/tappable";
import Text from "../../shared/components/text";
import Video from "../../shared/components/video";
import COLORS from "../../shared/constants/colors";
import SCREEN from "../../shared/constants/screen";
import useApp from "../../shared/hooks/use-app";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { CategoryWithProductsFragment } from "../gql/category.gql";

interface CategoryParams {
	category: CategoryWithProductsFragment;
	handleProductClick: (product: ProductFragment) => void;
}

const Category: React.FC<CategoryParams> = (props) => {
	const { category, handleProductClick } = props;
	const { setOffsetY, isDark, setIsDark } = useApp();
	const scrollY = useRef(new Animated.Value(0)).current;
	const [blurIntensity, setBlurIntensity] = useState(0);
	const darkenStyle = {
		opacity: scrollY.interpolate({
			inputRange: [0, SCREEN.HEIGHT / 3],
			outputRange: [0, 0.7],
			extrapolate: "clamp"
		})
	};
	const scaleStyle = {
		transform: [
			{
				scale: scrollY.interpolate({
					inputRange: [-(SCREEN.HEIGHT / 2), 0, SCREEN.HEIGHT / 2],
					outputRange: [1.5, 1.2, 1],
					extrapolate: "clamp"
				})
			}
		]
	};
	const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
		listener: (event: any) => {
			const { y } = event.nativeEvent.contentOffset;
			const newIntensity = Math.min(70, (y / (SCREEN.HEIGHT / 2)) * 70);

			setOffsetY(y);
			setIsDark(y > 0);
			setBlurIntensity(newIntensity);
		},
		useNativeDriver: false
	});
	const themeColor = isDark ? COLORS.WHITE : COLORS.BLACK;

	const _themeStyles = { color: themeColor, borderColor: themeColor };

	const [previewProduct, ...products] = category.products || [];

	const { addProduct } = useNewOrder();

	if (!previewProduct) {
		return <Text>...Loading</Text>;
	}

	return (
		<View style={{ flex: 1, overflow: "hidden" }}>
			<Animated.View style={[styles.media, scaleStyle]}>
				<Video videoUrl={getAssetsUrl(previewProduct.image?.url)} imageUrl={getAssetsUrl(previewProduct.image?.url)} />
			</Animated.View>

			<ScrollView
				style={styles.details}
				scrollEventThrottle={16}
				onScroll={handleScroll}
				showsVerticalScrollIndicator={false}
			>
				<Tappable onTap={() => handleProductClick(previewProduct)}>
					<View style={styles.emptyBlock}></View>
				</Tappable>

				<ProductPreview product={previewProduct} handleProductClick={addProduct} />

				<View style={styles.productsCards}>
					{products.map((product) => (
						<Pressable onPress={() => handleProductClick(product)} style={styles.productsCard} key={product.id}>
							<ProductCard product={product} />
						</Pressable>
					))}
				</View>
			</ScrollView>

			<Animated.View style={[styles.darkenLayer, darkenStyle]}></Animated.View>
			<Animated.View style={[styles.blurLayer]}>
				<BlurView style={StyleSheet.absoluteFill} intensity={blurIntensity} />
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	media: {
		flex: 1
	},
	details: {
		position: "absolute",
		left: 0,
		top: 0,
		height: "100%",
		width: "100%",
		zIndex: 3
	},
	emptyBlock: {
		height: SCREEN.HEIGHT - 150
	},
	darkenLayer: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "black",
		zIndex: 2
	},
	blurLayer: {
		...StyleSheet.absoluteFillObject,
		zIndex: 1
	},
	productsCards: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 15,
		padding: 30
	},
	productsCard: {
		width: "47%"
	}
});

export default Category;
