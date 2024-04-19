import { gql } from "@apollo/client";
export interface ReelFragment {
	__typename?: "ReelEntity";
	id: string;
	name: string;
	image?: { __typename?: "FileEntity"; id: string; url: string } | null;
}

export interface ReelWithDistanceFragment {
	__typename?: "ReelEntity";
	id: string;
	name: string;
	link?: string | null;
	position: number;
	icon?: string | null;
	image?: { __typename?: "FileEntity"; id: string; url: string } | null;
	place: {
		__typename?: "PlaceEntity";
		id: string;
		name: string;
		logo?: { __typename?: "FileEntity"; id: string; url: string } | null;
	};
}

export const ReelFragmentDoc = gql`
	fragment Reel on ReelEntity {
		id
		name
		image {
			id
			url
		}
	}
`;
export const ReelWithDistanceFragmentDoc = gql`
	fragment ReelWithDistance on ReelEntity {
		id
		name
		link
		position
		icon
		image {
			id
			url
		}
		place {
			id
			name
			logo {
				id
				url
			}
		}
	}
`;
