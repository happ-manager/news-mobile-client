import { ApolloClient, InMemoryCache } from "@apollo/client";

import ENV from "../constants/env";

const createApolloClient = (accessToken?: string) =>
	new ApolloClient({
		uri: ENV.GRAPHQL_URL,
		cache: new InMemoryCache(),
		headers: {
			authorization: accessToken ? `Bearer ${accessToken}` : ""
		}
	});

export default createApolloClient;
