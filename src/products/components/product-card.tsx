import { ResizeMode } from "expo-av";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { ProductFragment } from "../gql/product.gql";

interface ProductPreviewProps {
	product: ProductFragment;
}

const ProductCard: React.FC<ProductPreviewProps> = (props) => {
	const { product } = props;

	return (
		<View style={styles.smallProduct}>
			<Image style={styles.smallProductImage} contentFit={ResizeMode.COVER} source={getAssetsUrl(product.image?.url)} />
			<View style={styles.smallProductDescription}>
				<Text style={styles.smallProductName}>{product.name}</Text>
				<Text style={styles.smallProductPrice}>{product.price} грн</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	smallProduct: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 24
	},
	smallProductImage: {
		width: "100%",
		height: 154,
		borderRadius: 24
	},
	smallProductDescription: {
		padding: 15
	},
	smallProductName: {
		fontWeight: "700",
		color: COLORS.BLACK,
		fontSize: 12
	},
	smallProductPrice: {
		color: COLORS.BLACK,
		fontSize: 16,
		fontWeight: "600",
		marginTop: 16
	}
});

export default ProductCard;
