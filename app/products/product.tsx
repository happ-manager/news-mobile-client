import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as React from "react";
import { useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";

import useNewOrder from "../../src/orders/hooks/use-new-order";
import ProductPreview from "../../src/products/components/product-preview";
import type { ProductFragment } from "../../src/products/gql/product.gql";
import Text from "../../src/shared/components/text";
import Video from "../../src/shared/components/video";
import COLORS from "../../src/shared/constants/colors";
import SCREEN from "../../src/shared/constants/screen";
import useApp from "../../src/shared/hooks/use-app";
import getAssetsUrl from "../../src/shared/utils/get-assets-url";
import { useProductQuery } from "./gql/product.gql";

const Product = () => {
	const params = useLocalSearchParams();
	const { setOffsetY, isDark, setIsDark } = useApp();
	const { addProduct } = useNewOrder();
	const router = useRouter();

	const scrollY = useRef(new Animated.Value(0)).current; // Создаем анимированное значение для отслеживания положения прокрутки
	const [blurIntensity, setBlurIntensity] = useState(0);

	if (!params.productId || typeof params.productId !== "string") {
		return <Text>Oops...</Text>;
	}

	const { data, loading, error } = useProductQuery({ variables: { productId: params.productId } });

	const { product } = data || {};

	if (loading || error || !product) {
		return <Text>Loading...</Text>;
	}

	const handleProductClick = (_product: ProductFragment) => {
		addProduct(_product);
		router.back();
	};

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
	const _themeColor = isDark ? COLORS.WHITE : COLORS.BLACK;

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.BLACK }}>
			<Animated.View style={[styles.media, scaleStyle]}>
				<Video videoUrl={getAssetsUrl(product.image?.url)} imageUrl={getAssetsUrl(product.image?.url)} />
			</Animated.View>

			<ScrollView
				style={styles.details}
				scrollEventThrottle={16}
				onScroll={handleScroll}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.emptyBlock}></View>

				<LinearGradient colors={["transparent", "rgba(0,0,0,1)"]} style={styles.gradient}>
					<ProductPreview product={product} handleProductClick={handleProductClick} />
				</LinearGradient>

				<View style={styles.darkBG}>
					<View style={styles.productsCards}>
						{/* {product.childProductsToProducts.map(({ childProduct }) => (*/}
						{/*	<Pressable*/}
						{/*		onPress={() => handleProductClick(childProduct)}*/}
						{/*		style={styles.productsCard}*/}
						{/*		key={childProduct.id}*/}
						{/*	>*/}
						{/*		<ProductCard product={childProduct} />*/}
						{/*	</Pressable>*/}
						{/* ))}*/}
					</View>
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
		height: "100%"
	},
	details: {
		position: "absolute",
		left: 0,
		top: 0,
		height: "100%",
		width: "100%",
		zIndex: 3
	},
	gradient: {},
	emptyBlock: {
		height: SCREEN.HEIGHT - 400
	},
	darkBG: {
		backgroundColor: COLORS.BLACK,
		height: "100%"
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
		marginTop: 15,
		padding: 30
	},
	productsCard: {
		width: "47%"
	}
});
export default Product;
