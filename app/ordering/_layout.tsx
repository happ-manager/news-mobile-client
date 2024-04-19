import { Slot, useRouter } from "expo-router";
import * as React from "react";
import { Pressable, View } from "react-native";

import NewOrderPreview from "../../src/orders/components/new-order-preview";
import useNewOrder from "../../src/orders/hooks/use-new-order";
import Header from "../../src/shared/components/header";

const MainLayout = () => {
	const router = useRouter();
	const { productsToOrder } = useNewOrder();

	const handleNewOrderPress = () => {
		console.log("1");
		router.push({ pathname: "orders/new-order" });
	};

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<Slot />

			<Pressable onPress={handleNewOrderPress}>
				<NewOrderPreview productsToOrder={productsToOrder} />
			</Pressable>
		</View>
	);
};

export default MainLayout;
