import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

import type * as Types from "../../../../graphql";
import { ArticleFragmentDoc } from "../../../../src/articles/gql/article.gql";
import { CategoryFragmentDoc } from "../../../../src/categories/gql/category.gql";
import { TagFragmentDoc } from "../../../../src/tags/gql/tag.gql";
const defaultOptions = {} as const;
export type ArticlesQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export interface ArticlesQuery {
	__typename?: "Query";
	articles: {
		__typename?: "PaginatedArticles";
		data: { __typename?: "ArticleEntity"; id: string; title: string; description: string; content: string }[];
	};
}

export type TagsQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export interface TagsQuery {
	__typename?: "Query";
	tags: { __typename?: "PaginatedTags"; data: { __typename?: "TagEntity"; id: string; name: string }[] };
}

export type CategoriesQueryVariables = Types.Exact<{
	skip?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
	take?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
}>;

export interface CategoriesQuery {
	__typename?: "Query";
	categories: {
		__typename?: "PaginatedCategories";
		data: { __typename?: "CategoryEntity"; id: string; name: string }[];
	};
}

export const ArticlesDocument = gql`
	query Articles($skip: Int, $take: Int) {
		articles(skip: $skip, take: $take) {
			data {
				...Article
			}
		}
	}
	${ArticleFragmentDoc}
`;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
}
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
}
export function useArticlesSuspenseQuery(
	baseOptions?: Apollo.SuspenseQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useSuspenseQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
}
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesSuspenseQueryHookResult = ReturnType<typeof useArticlesSuspenseQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const TagsDocument = gql`
	query Tags($skip: Int, $take: Int) {
		tags(skip: $skip, take: $take) {
			data {
				...Tag
			}
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
export const CategoriesDocument = gql`
	query Categories($skip: Int, $take: Int) {
		categories(skip: $skip, take: $take) {
			data {
				...Category
			}
		}
	}
	${CategoryFragmentDoc}
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
 *      skip: // value for 'skip'
 *      take: // value for 'take'
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
