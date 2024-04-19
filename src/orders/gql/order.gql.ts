import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
const defaultOptions = {} as const;
export interface OrderFragment {
	__typename?: "ActiveOrderEntity";
	id: string;
}

export type CreateOrderMutationVariables = Types.Exact<{
	order: Types.CreateOrderInput;
}>;

export interface CreateOrderMutation {
	__typename?: "Mutation";
	createOrder: { __typename?: "ActiveOrderEntity"; id: string };
}

export type UpdateOrderMutationVariables = Types.Exact<{
	order: Types.UpdateOrderInput;
}>;

export interface UpdateOrderMutation {
	__typename?: "Mutation";
	updateOrder: { __typename?: "ActiveOrderEntity"; id: string };
}

export const OrderFragmentDoc = gql`
	fragment Order on ActiveOrderEntity {
		id
	}
`;
export const CreateOrderDocument = gql`
	mutation CreateOrder($order: CreateOrderInput!) {
		createOrder(order: $order) {
			id
		}
	}
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useCreateOrderMutation(
	baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
	mutation UpdateOrder($order: UpdateOrderInput!) {
		updateOrder(order: $order) {
			id
		}
	}
`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useUpdateOrderMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
}
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
