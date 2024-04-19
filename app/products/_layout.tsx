import { Stack } from "expo-router";
import * as React from "react";
import { Text } from "react-native";

const ProductsLayout = () => (
	<Stack screenOptions={{ headerShown: false }}>
		<Stack.Screen name="product" />
	</Stack>
);

export default ProductsLayout;
