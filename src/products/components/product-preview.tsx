import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../shared/components/button";
import Gradient from "../../shared/components/gradient";
import Icon from "../../shared/components/icon";
import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import type { ProductFragment } from "../gql/product.gql";

interface ProductPreviewProps {
	product: ProductFragment;
	handleProductClick: (product: ProductFragment) => void;
}

const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
	const { product, handleProductClick } = props;

	const onPress = async () => {
		handleProductClick(product);
		await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
	};

	return (
		<View style={styles.product}>
			<View style={styles.productTop}>
				<View style={styles.textBlock}>
					<Text textStyle={[styles.productName]}>{product.name}</Text>
					<Text textStyle={styles.productPrice}>{product.price} UAH</Text>
				</View>

				<Button onPress={onPress}>
					<Gradient
						gradientStyle={styles.addButton}
						colors={["#FF7474", "#FFD08A", "#8B9CFF"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
					>
						<Icon name={"plus"} size={24} color={"white"}></Icon>
					</Gradient>
				</Button>
			</View>

			<View style={styles.descriptionBlock}>
				<BlurView style={styles.descriptionBlur} intensity={40}>
					<Text textStyle={styles.productDescription}>{product.description}</Text>
				</BlurView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	product: {
		paddingHorizontal: 30,
		gap: 30
	},
	productTop: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	descriptionBlur: {
		flex: 1,
		padding: 20
	},
	textBlock: {
		display: "flex",
		gap: 15
	},
	productName: {
		color: COLORS.WHITE,
		fontSize: 30,
		fontWeight: "700"
	},
	productPrice: {
		color: COLORS.WHITE,
		fontSize: 22,
		fontWeight: "700"
	},
	descriptionBlock: {
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 15,
		overflow: "hidden",
		backgroundColor: "transparent"
	},
	productDescription: {
		fontSize: 17,
		fontWeight: "400",
		lineHeight: 20,
		color: "#9F9F9F"
	},
	addButton: {
		width: 59,
		height: 59,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30
	}
});

export default ProductPreview;
