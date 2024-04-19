import { gql } from "@apollo/client";

import { ProductFragmentDoc } from "../../products/gql/product.gql";
export interface CategoryFragment {
	__typename?: "CategoryEntity";
	id: string;
	name: string;
}

export interface CategoryWithProductsFragment {
	__typename?: "CategoryEntity";
	id: string;
	name: string;
	products?:
		| {
				__typename?: "ProductEntity";
				id: string;
				name: string;
				description?: string | null;
				price: number;
				image?: { __typename?: "FileEntity"; id: string; url: string } | null;
		  }[]
		| null;
}

export const CategoryFragmentDoc = gql`
	fragment Category on CategoryEntity {
		id
		name
	}
`;
export const CategoryWithProductsFragmentDoc = gql`
	fragment CategoryWithProducts on CategoryEntity {
		...Category
		products {
			...Product
		}
	}
	${CategoryFragmentDoc}
	${ProductFragmentDoc}
`;
