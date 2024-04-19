import { useLocalSearchParams } from "expo-router";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../src/shared/components/text";
import { useActiveOrderQuery } from "./gql/order.gql";

const Order = () => {
	const params = useLocalSearchParams();

	if (!params.orderId || typeof params.orderId !== "string") {
		return <Text>Oops...</Text>;
	}

	const { data, loading, error } = useActiveOrderQuery({ variables: { orderId: params.orderId } });

	const { activeOrder } = data || {};

	if (loading || error || !activeOrder) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<Text>{activeOrder.id}</Text>
		</View>
	);
};

export default Order;
