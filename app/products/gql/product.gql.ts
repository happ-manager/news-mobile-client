import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
import { ProductFragmentDoc } from "../../../src/products/gql/product.gql";
const defaultOptions = {} as const;
export type ProductQueryVariables = Types.Exact<{
	productId: Types.Scalars["String"]["input"];
}>;

export interface ProductQuery {
	__typename?: "Query";
	product: {
		__typename?: "ProductEntity";
		id: string;
		name: string;
		description?: string | null;
		price: number;
		image?: { __typename?: "FileEntity"; id: string; url: string } | null;
	};
}

export const ProductDocument = gql`
	query Product($productId: String!) {
		product(id: $productId) {
			...Product
		}
	}
	${ProductFragmentDoc}
`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(
	baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> &
		({ variables: ProductQueryVariables; skip?: boolean } | { skip: boolean })
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
