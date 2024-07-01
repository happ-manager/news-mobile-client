import { gql } from "@apollo/client";
export interface TagFragment {
	__typename?: "TagEntity";
	id: string;
	name: string;
}

export const TagFragmentDoc = gql`
	fragment Tag on TagEntity {
		id
		name
	}
`;
