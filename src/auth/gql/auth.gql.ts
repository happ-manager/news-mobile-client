import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
	body: Types.LoginInput;
}>;

export interface LoginMutation {
	__typename?: "Mutation";
	login: { __typename?: "AccessToken"; accessToken: string };
}

export type VerifyCodeMutationVariables = Types.Exact<{
	code: Types.Scalars["Int"]["input"];
}>;

export interface VerifyCodeMutation {
	__typename?: "Mutation";
	verifyCode: { __typename?: "AccessToken"; accessToken: string };
}

export const LoginDocument = gql`
	mutation Login($body: LoginInput!) {
		login(body: $body) {
			accessToken
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const VerifyCodeDocument = gql`
	mutation VerifyCode($code: Int!) {
		verifyCode(code: $code) {
			accessToken
		}
	}
`;
export type VerifyCodeMutationFn = Apollo.MutationFunction<VerifyCodeMutation, VerifyCodeMutationVariables>;

/**
 * __useVerifyCodeMutation__
 *
 * To run a mutation, you first call `useVerifyCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCodeMutation, { data, loading, error }] = useVerifyCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyCodeMutation(
	baseOptions?: Apollo.MutationHookOptions<VerifyCodeMutation, VerifyCodeMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(VerifyCodeDocument, options);
}
export type VerifyCodeMutationHookResult = ReturnType<typeof useVerifyCodeMutation>;
export type VerifyCodeMutationResult = Apollo.MutationResult<VerifyCodeMutation>;
export type VerifyCodeMutationOptions = Apollo.BaseMutationOptions<VerifyCodeMutation, VerifyCodeMutationVariables>;
