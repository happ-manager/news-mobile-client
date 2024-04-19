import { createContext } from "react";

import type { ProductToOrderEntity } from "../../../graphql";
import type { ProductFragment } from "../../products/gql/product.gql";

interface NewOrderContextProps {
	productsToOrder: ProductToOrderEntity[];
	addProduct: (product: ProductFragment) => void;
	deleteProduct: (product: ProductFragment) => void;
	reset: () => void;
}

const NewOrderContext = createContext<NewOrderContextProps>({
	productsToOrder: [],
	addProduct: () => {},
	deleteProduct: () => {},
	reset: () => {}
});

export default NewOrderContext;
