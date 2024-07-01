import { gql } from "@apollo/client";
export interface CategoryFragment {
	__typename?: "CategoryEntity";
	id: string;
	name: string;
}

export const CategoryFragmentDoc = gql`
	fragment Category on CategoryEntity {
		id
		name
	}
`;
