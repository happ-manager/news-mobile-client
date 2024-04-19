import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
import { CategoryFragmentDoc } from "../../../src/categories/gql/category.gql";
import { ProductFragmentDoc } from "../../../src/products/gql/product.gql";
const defaultOptions = {} as const;
export type CategoriesQueryVariables = Types.Exact<Record<string, never>>;

export interface CategoriesQuery {
	__typename?: "Query";
	categories: {
		__typename?: "PaginatedCategory";
		data?:
			| {
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
			  }[]
			| null;
	};
}

export const CategoriesDocument = gql`
	query Categories {
		categories {
			data {
				...Category
				products {
					...Product
				}
			}
		}
	}
	${CategoryFragmentDoc}
	${ProductFragmentDoc}
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
}
export function useCategoriesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
}
export function useCategoriesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
