import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
import { PlaceWithDistanceFragmentDoc } from "../../../src/places/gql/place.gql";
import { ReelWithDistanceFragmentDoc } from "../../../src/reels/gql/reel.gql";
import { TagFragmentDoc } from "../../../src/tags/gql/tag.gql";
const defaultOptions = {} as const;
export type TagsQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	sortBy?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
	sortType?: Types.InputMaybe<Types.SortTypeEnum>;
	filtersArgs?: Types.InputMaybe<Types.FiltersArgsDto[] | Types.FiltersArgsDto>;
}>;

export interface TagsQuery {
	__typename?: "Query";
	tags: {
		__typename?: "PaginatedTags";
		page: number;
		totalCount: number;
		data?: { __typename?: "TagEntity"; id: string; name: string; icon?: string | null; position: number }[] | null;
	};
}

export type ReelsNearbyQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	sortBy?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
	sortType?: Types.InputMaybe<Types.SortTypeEnum>;
	filtersArgs?: Types.InputMaybe<Types.FiltersArgsDto[] | Types.FiltersArgsDto>;
	address?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
	lat?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
	lng?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
	distance?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
}>;

export interface ReelsNearbyQuery {
	__typename?: "Query";
	getReelsNearby: {
		__typename?: "PaginatedReels";
		page: number;
		totalCount: number;
		data?:
			| {
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
			  }[]
			| null;
	};
}

export type PlacesNearbyQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	sortBy?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
	sortType?: Types.InputMaybe<Types.SortTypeEnum>;
	filtersArgs?: Types.InputMaybe<Types.FiltersArgsDto[] | Types.FiltersArgsDto>;
	address?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
	lat?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
	lng?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
	distance?: Types.InputMaybe<Types.Scalars["Float"]["input"]>;
}>;

export interface PlacesNearbyQuery {
	__typename?: "Query";
	getNearby: {
		__typename?: "PaginatedPlaceWithDistance";
		page: number;
		totalCount: number;
		data?:
			| {
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
			  }[]
			| null;
	};
}

export const TagsDocument = gql`
	query Tags($skip: Int, $take: Int, $sortBy: String, $sortType: SortTypeEnum, $filtersArgs: [FiltersArgsDto!]) {
		tags(skip: $skip, take: $take, sortBy: $sortBy, sortType: $sortType, filtersArgs: $filtersArgs) {
			data {
				...Tag
			}
			page
			totalCount
		}
	}
	${TagFragmentDoc}
`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      sortBy: // value for 'sortBy'
 *      sortType: // value for 'sortType'
 *      filtersArgs: // value for 'filtersArgs'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
}
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
}
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
}
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const ReelsNearbyDocument = gql`
	query ReelsNearby(
		$skip: Int
		$take: Int
		$sortBy: String
		$sortType: SortTypeEnum
		$filtersArgs: [FiltersArgsDto!]
		$address: String
		$lat: Float
		$lng: Float
		$distance: Float
	) {
		getReelsNearby(
			skip: $skip
			take: $take
			sortBy: $sortBy
			sortType: $sortType
			filtersArgs: $filtersArgs
			address: $address
			lat: $lat
			lng: $lng
			distance: $distance
		) {
			page
			totalCount
			data {
				...ReelWithDistance
			}
		}
	}
	${ReelWithDistanceFragmentDoc}
`;

/**
 * __useReelsNearbyQuery__
 *
 * To run a query within a React component, call `useReelsNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useReelsNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReelsNearbyQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      sortBy: // value for 'sortBy'
 *      sortType: // value for 'sortType'
 *      filtersArgs: // value for 'filtersArgs'
 *      address: // value for 'address'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      distance: // value for 'distance'
 *   },
 * });
 */
export function useReelsNearbyQuery(
	baseOptions?: Apollo.QueryHookOptions<ReelsNearbyQuery, ReelsNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ReelsNearbyQuery, ReelsNearbyQueryVariables>(ReelsNearbyDocument, options);
}
export function useReelsNearbyLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<ReelsNearbyQuery, ReelsNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ReelsNearbyQuery, ReelsNearbyQueryVariables>(ReelsNearbyDocument, options);
}
export function useReelsNearbySuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ReelsNearbyQuery, ReelsNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ReelsNearbyQuery, ReelsNearbyQueryVariables>(ReelsNearbyDocument, options);
}
export type ReelsNearbyQueryHookResult = ReturnType<typeof useReelsNearbyQuery>;
export type ReelsNearbyLazyQueryHookResult = ReturnType<typeof useReelsNearbyLazyQuery>;
export type ReelsNearbySuspenseQueryHookResult = ReturnType<typeof useReelsNearbySuspenseQuery>;
export type ReelsNearbyQueryResult = Apollo.QueryResult<ReelsNearbyQuery, ReelsNearbyQueryVariables>;
export const PlacesNearbyDocument = gql`
	query PlacesNearby(
		$skip: Int
		$take: Int
		$sortBy: String
		$sortType: SortTypeEnum
		$filtersArgs: [FiltersArgsDto!]
		$address: String
		$lat: Float
		$lng: Float
		$distance: Float
	) {
		getNearby(
			skip: $skip
			take: $take
			sortBy: $sortBy
			sortType: $sortType
			filtersArgs: $filtersArgs
			address: $address
			lat: $lat
			lng: $lng
			distance: $distance
		) {
			page
			totalCount
			data {
				...PlaceWithDistance
			}
		}
	}
	${PlaceWithDistanceFragmentDoc}
`;

/**
 * __usePlacesNearbyQuery__
 *
 * To run a query within a React component, call `usePlacesNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesNearbyQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      sortBy: // value for 'sortBy'
 *      sortType: // value for 'sortType'
 *      filtersArgs: // value for 'filtersArgs'
 *      address: // value for 'address'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      distance: // value for 'distance'
 *   },
 * });
 */
export function usePlacesNearbyQuery(
	baseOptions?: Apollo.QueryHookOptions<PlacesNearbyQuery, PlacesNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<PlacesNearbyQuery, PlacesNearbyQueryVariables>(PlacesNearbyDocument, options);
}
export function usePlacesNearbyLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<PlacesNearbyQuery, PlacesNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<PlacesNearbyQuery, PlacesNearbyQueryVariables>(PlacesNearbyDocument, options);
}
export function usePlacesNearbySuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<PlacesNearbyQuery, PlacesNearbyQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<PlacesNearbyQuery, PlacesNearbyQueryVariables>(PlacesNearbyDocument, options);
}
export type PlacesNearbyQueryHookResult = ReturnType<typeof usePlacesNearbyQuery>;
export type PlacesNearbyLazyQueryHookResult = ReturnType<typeof usePlacesNearbyLazyQuery>;
export type PlacesNearbySuspenseQueryHookResult = ReturnType<typeof usePlacesNearbySuspenseQuery>;
export type PlacesNearbyQueryResult = Apollo.QueryResult<PlacesNearbyQuery, PlacesNearbyQueryVariables>;
