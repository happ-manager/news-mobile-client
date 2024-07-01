import { gql } from "@apollo/client";
export interface ArticleFragment {
	__typename?: "ArticleEntity";
	id: string;
	title: string;
	description: string;
	content: string;
}

export const ArticleFragmentDoc = gql`
	fragment Article on ArticleEntity {
		id
		title
		description
		content
	}
`;
