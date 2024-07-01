import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../graphql";
const defaultOptions = {} as const;
export interface AuthTokenFragment {
	__typename?: "AuthTokensDto";
	accessToken: string;
	refreshToken: string;
	expiresIn: number;
}

export type MeMutationVariables = Types.Exact<Record<string, never>>;

export interface MeMutation {
	__typename?: "Mutation";
	me: { __typename?: "AuthTokensDto"; accessToken: string; refreshToken: string; expiresIn: number };
}

export type RefreshTokensMutationVariables = Types.Exact<{
	refreshToken: Types.Scalars["String"]["input"];
}>;

export interface RefreshTokensMutation {
	__typename?: "Mutation";
	refreshTokens: { __typename?: "AuthTokensDto"; accessToken: string; refreshToken: string; expiresIn: number };
}

export type LoginMutationVariables = Types.Exact<{
	tel: Types.Scalars["String"]["input"];
}>;

export interface LoginMutation {
	__typename?: "Mutation";
	login: { __typename?: "AuthTokensDto"; accessToken: string; refreshToken: string; expiresIn: number };
}

export type VerifyCodeMutationVariables = Types.Exact<{
	verificationCode: Types.Scalars["String"]["input"];
}>;

export interface VerifyCodeMutation {
	__typename?: "Mutation";
	verifyCode: { __typename?: "AuthTokensDto"; accessToken: string; refreshToken: string; expiresIn: number };
}

export const AuthTokenFragmentDoc = gql`
	fragment AuthToken on AuthTokensDto {
		accessToken
		refreshToken
		expiresIn
	}
`;
export const MeDocument = gql`
	mutation Me {
		me {
			...AuthToken
		}
	}
	${AuthTokenFragmentDoc}
`;
export type MeMutationFn = Apollo.MutationFunction<MeMutation, MeMutationVariables>;

/**
 * __useMeMutation__
 *
 * To run a mutation, you first call `useMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [meMutation, { data, loading, error }] = useMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useMeMutation(baseOptions?: Apollo.MutationHookOptions<MeMutation, MeMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<MeMutation, MeMutationVariables>(MeDocument, options);
}
export type MeMutationHookResult = ReturnType<typeof useMeMutation>;
export type MeMutationResult = Apollo.MutationResult<MeMutation>;
export type MeMutationOptions = Apollo.BaseMutationOptions<MeMutation, MeMutationVariables>;
export const RefreshTokensDocument = gql`
	mutation RefreshTokens($refreshToken: String!) {
		refreshTokens(refreshToken: $refreshToken) {
			...AuthToken
		}
	}
	${AuthTokenFragmentDoc}
`;
export type RefreshTokensMutationFn = Apollo.MutationFunction<RefreshTokensMutation, RefreshTokensMutationVariables>;

/**
 * __useRefreshTokensMutation__
 *
 * To run a mutation, you first call `useRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokensMutation, { data, loading, error }] = useRefreshTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshTokensMutation(
	baseOptions?: Apollo.MutationHookOptions<RefreshTokensMutation, RefreshTokensMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument, options);
}
export type RefreshTokensMutationHookResult = ReturnType<typeof useRefreshTokensMutation>;
export type RefreshTokensMutationResult = Apollo.MutationResult<RefreshTokensMutation>;
export type RefreshTokensMutationOptions = Apollo.BaseMutationOptions<
	RefreshTokensMutation,
	RefreshTokensMutationVariables
>;
export const LoginDocument = gql`
	mutation Login($tel: String!) {
		login(tel: $tel) {
			...AuthToken
		}
	}
	${AuthTokenFragmentDoc}
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
 *      tel: // value for 'tel'
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
	mutation VerifyCode($verificationCode: String!) {
		verifyCode(verificationCode: $verificationCode) {
			...AuthToken
		}
	}
	${AuthTokenFragmentDoc}
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
 *      verificationCode: // value for 'verificationCode'
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
