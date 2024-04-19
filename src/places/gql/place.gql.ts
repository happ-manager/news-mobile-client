import { gql } from "@apollo/client";

import type * as Types from "../../../graphql";
export interface PlaceFragment {
	__typename?: "PlaceEntity";
	id: string;
	name: string;
}

export interface PlaceWithReelsFragment {
	__typename?: "PlaceEntity";
	id: string;
	name: string;
	reels?: { __typename?: "ReelEntity"; id: string; name: string }[] | null;
}

export interface PlaceWithDistanceFragment {
	__typename?: "PlaceWithDistance";
	id: string;
	name: string;
	status: Types.PlaceStatusEnum;
	address: string;
	weekdayStart: any;
	weekdayEnd: any;
	isHidden: boolean;
	source: Types.PlaceSourceEnum;
	distance?: number | null;
	priority: number;
	likesCount: number;
	point?: { __typename?: "PointType"; coordinates: number[] } | null;
	image?: { __typename?: "FileEntity"; id: string; url: string } | null;
	logo?: { __typename?: "FileEntity"; id: string; url: string } | null;
}

export const PlaceFragmentDoc = gql`
	fragment Place on PlaceEntity {
		id
		name
	}
`;
export const PlaceWithReelsFragmentDoc = gql`
	fragment PlaceWithReels on PlaceEntity {
		...Place
		reels {
			id
			name
		}
	}
	${PlaceFragmentDoc}
`;
export const PlaceWithDistanceFragmentDoc = gql`
	fragment PlaceWithDistance on PlaceWithDistance {
		id
		name
		status
		address
		weekdayStart
		weekdayEnd
		isHidden
		source
		distance
		priority
		likesCount
		point {
			coordinates
		}
		image {
			id
			url
		}
		logo {
			id
			url
		}
	}
`;
