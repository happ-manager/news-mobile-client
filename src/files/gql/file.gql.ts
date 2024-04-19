import { gql } from "@apollo/client";
export interface FileFragment {
	__typename?: "FileEntity";
	id: string;
	url: string;
}

export const FileFragmentDoc = gql`
	fragment File on FileEntity {
		id
		url
	}
`;
