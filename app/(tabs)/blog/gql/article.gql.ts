import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../../graphql";
import { ArticleFragmentDoc } from "../../../../src/articles/gql/article.gql";
const defaultOptions = {} as const;
export type ArticleQueryVariables = Types.Exact<{
	articleId: Types.Scalars["ID"]["input"];
}>;

export interface ArticleQuery {
	__typename?: "Query";
	article: { __typename?: "ArticleEntity"; id: string; title: string; description: string; content: string };
}

export const ArticleDocument = gql`
	query Article($articleId: ID!) {
		article(id: $articleId) {
			...Article
		}
	}
	${ArticleFragmentDoc}
`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useArticleQuery(
	baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables> &
		({ variables: ArticleQueryVariables; skip?: boolean } | { skip: boolean })
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export function useArticleSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleSuspenseQueryHookResult = ReturnType<typeof useArticleSuspenseQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
