import React, { type ReactNode, useState } from "react";

import type { ProductEntity, ProductToOrderEntity } from "../../../graphql";
import NewOrderContext from "../contextes/new-order.context";

interface NewOrderProviderProps {
	children: ReactNode;
}
const NewOrderProvider: React.FC<NewOrderProviderProps> = ({ children }) => {
	const [productsToOrder, setProductsToOrder] = useState<ProductToOrderEntity[]>([]);

	const addProduct = (product: ProductEntity) => {
		setProductsToOrder((prevProductsToOrder) => {
			const existingProductIndex = prevProductsToOrder.findIndex((p) => p.product.id === product.id);

			if (existingProductIndex >= 0) {
				const newProductsToOrder = [...prevProductsToOrder];
				newProductsToOrder[existingProductIndex].count += 1;
				return newProductsToOrder;
			}
			return [...prevProductsToOrder, { id: product.id, count: 1, product } as ProductToOrderEntity];
		});
	};
	const deleteProduct = (product: ProductEntity) => {
		setProductsToOrder((prevProductsToOrder) => {
			const existingProductIndex = prevProductsToOrder.findIndex((p) => p.product.id === product.id);

			if (existingProductIndex >= 0) {
				if (prevProductsToOrder[existingProductIndex].count > 1) {
					const newProductsToOrder = [...prevProductsToOrder];
					newProductsToOrder[existingProductIndex].count -= 1;
					return newProductsToOrder;
				}
				return prevProductsToOrder.filter((_, index) => index !== existingProductIndex);
			}
			return prevProductsToOrder;
		});
	};

	const reset = () => {
		setProductsToOrder([]);
	};

	return (
		<NewOrderContext.Provider value={{ productsToOrder, addProduct, deleteProduct, reset }}>
			{children}
		</NewOrderContext.Provider>
	);
};

export default NewOrderProvider;
