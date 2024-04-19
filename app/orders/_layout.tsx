import { Stack } from "expo-router";
import * as React from "react";
import { Text } from "react-native";

const OrdersLayout = () => (
	<Stack screenOptions={{ headerShown: false }}>
		<Stack.Screen name="new-order" />
		<Stack.Screen name="order" />
	</Stack>
);

export default OrdersLayout;
