import { gql } from "@apollo/client";

import { FileFragmentDoc } from "../../files/gql/file.gql";
export interface ProductFragment {
	__typename?: "ProductEntity";
	id: string;
	name: string;
	description?: string | null;
	price: number;
	image?: { __typename?: "FileEntity"; id: string; url: string } | null;
}

export const ProductFragmentDoc = gql`
	fragment Product on ProductEntity {
		id
		name
		description
		price
		image {
			...File
		}
	}
	${FileFragmentDoc}
`;
