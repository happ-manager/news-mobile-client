import * as React from "react";
import { Pressable, View } from "react-native";

import type { ProductToOrderEntity } from "../../graphql";
import { OrderTypeEnum } from "../../graphql";
import { useCreateOrderMutation } from "../../src/orders/gql/order.gql";
import useNewOrder from "../../src/orders/hooks/use-new-order";
import SwipeToDeleteList from "../../src/shared/components/swipe-to-delete-list";
import Text from "../../src/shared/components/text";

const NewOrder = () => {
	const { productsToOrder, deleteProduct, reset } = useNewOrder();
	const [createOrderMutation] = useCreateOrderMutation();

	const handleCreateOrder = async () => {
		const result = await createOrderMutation({
			variables: { order: { productsToOrder: [], place: "", type: OrderTypeEnum.InPlace } }
		});

		const orderId = result.data?.createOrder?.id;

		if (!orderId) {
			return;
		}

		reset();
	};

	const handleDeleteProduct = (productToOrder: ProductToOrderEntity) => {
		deleteProduct(productToOrder.product);
	};

	return (
		<View style={{ flex: 1 }}>
			<SwipeToDeleteList
				data={productsToOrder}
				renderItem={({ item }) => <Text style={{ flex: 1, height: 50 }}>{item.product.name}</Text>}
				handleDelete={handleDeleteProduct}
			/>

			<Pressable onPress={handleCreateOrder}>
				<Text>Создать заказ</Text>
			</Pressable>
		</View>
	);
};

export default NewOrder;
