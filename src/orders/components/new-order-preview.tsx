import * as React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import type { ProductToOrderEntity } from "../../../graphql";
import Text from "../../shared/components/text";

interface NewOrderPreviewParams {
	productsToOrder: ProductToOrderEntity[];
}

const NewOrderPreview: React.FC<NewOrderPreviewParams> = (params) => {
	const { productsToOrder } = params;
	const bottomOffset = useSharedValue(150);

	useEffect(() => {
		bottomOffset.value = productsToOrder.length > 0 ? 0 : 150;
	}, [productsToOrder]);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: withTiming(bottomOffset.value, { duration: 500 }) }]
	}));

	return (
		<Animated.View style={[styles.orderSummary, animatedStyle]}>
			<Text>{`In the basket: ${productsToOrder.length} items`}</Text>
		</Animated.View>
	);
};

export default NewOrderPreview;

const styles = StyleSheet.create({
	orderSummary: {
		position: "absolute",
		bottom: 150,
		left: 0,
		right: 0,
		height: 100,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		padding: 20
	}
});
