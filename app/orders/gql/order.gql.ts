import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
import { OrderFragmentDoc } from "../../../src/orders/gql/order.gql";
const defaultOptions = {} as const;
export type ActiveOrderQueryVariables = Types.Exact<{
	orderId?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export interface ActiveOrderQuery {
	__typename?: "Query";
	activeOrder?: { __typename?: "ActiveOrderEntity"; id: string } | null;
}

export const ActiveOrderDocument = gql`
	query ActiveOrder($orderId: String) {
		activeOrder(orderId: $orderId) {
			...Order
		}
	}
	${OrderFragmentDoc}
`;

/**
 * __useActiveOrderQuery__
 *
 * To run a query within a React component, call `useActiveOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useActiveOrderQuery(
	baseOptions?: Apollo.QueryHookOptions<ActiveOrderQuery, ActiveOrderQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ActiveOrderQuery, ActiveOrderQueryVariables>(ActiveOrderDocument, options);
}
export function useActiveOrderLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<ActiveOrderQuery, ActiveOrderQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ActiveOrderQuery, ActiveOrderQueryVariables>(ActiveOrderDocument, options);
}
export function useActiveOrderSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ActiveOrderQuery, ActiveOrderQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ActiveOrderQuery, ActiveOrderQueryVariables>(ActiveOrderDocument, options);
}
export type ActiveOrderQueryHookResult = ReturnType<typeof useActiveOrderQuery>;
export type ActiveOrderLazyQueryHookResult = ReturnType<typeof useActiveOrderLazyQuery>;
export type ActiveOrderSuspenseQueryHookResult = ReturnType<typeof useActiveOrderSuspenseQuery>;
export type ActiveOrderQueryResult = Apollo.QueryResult<ActiveOrderQuery, ActiveOrderQueryVariables>;
