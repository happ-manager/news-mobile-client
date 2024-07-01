import { ApolloClient, from, fromPromise, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { ErrorsEnum } from "../../../graphql";
import type { AuthContextProps } from "../../auth/contextes/auth.context";
import ENV from "../constants/env";

const httpLink = new HttpLink({ uri: ENV.GRAPHQL_URL });

const authLink = (authContext?: AuthContextProps) =>
	setContext((_, { headers }) => {
		if (!authContext) {
			return { headers };
		}

		const { authTokens } = authContext;

		return {
			headers: {
				...headers,
				authorization: authTokens ? `Bearer ${authTokens.accessToken}` : ""
			}
		};
	});

const errorLink = (authContext?: AuthContextProps) =>
	onError((errorResonse) => {
		const { graphQLErrors, operation, forward } = errorResonse;

		if (!authContext) {
			return;
		}

		const { authTokens, refreshToken } = authContext;

		for (const err of graphQLErrors || []) {
			const { statusCode, message } = err.extensions["originalError"] as { statusCode: number; message: ErrorsEnum };

			const { isRefreshing } = operation.getContext();

			if (statusCode === 401 && message === ErrorsEnum.InvalidToken && authTokens && !isRefreshing) {
				operation.setContext({ isRefreshing: true });

				return fromPromise(refreshToken({ variables: { refreshToken: authTokens.refreshToken } }))
					.filter((value) => Boolean(value))
					.flatMap((result) => {
						const { refreshTokens } = result.data || {};

						const oldHeaders = operation.getContext().headers;
						operation.setContext({
							headers: {
								...oldHeaders,
								authorization: refreshTokens ? `Bearer ${refreshTokens.accessToken}` : ""
							}
						});

						return forward(operation);
					});
			}
		}
	});

const createApolloClient = (authContext?: AuthContextProps) =>
	new ApolloClient({
		cache: new InMemoryCache(),
		// eslint-disable-next-line unicorn/prefer-spread
		link: from([errorLink(authContext), authLink(authContext).concat(httpLink)])
	});

export default createApolloClient;
