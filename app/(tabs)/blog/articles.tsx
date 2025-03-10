import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import ArticleCard from "../../../src/articles/components/article-card";
import type { ArticleFragment } from "../../../src/articles/gql/article.gql";
import Category from "../../../src/categories/components/category/category";
import type { CategoryFragment } from "../../../src/categories/gql/category.gql";
import Text from "../../../src/shared/components/text/text";
import COLORS from "../../../src/shared/constants/colors";
import ROUTES from "../../../src/shared/constants/routes";
import { useArticlesQuery, useCategoriesQuery } from "./gql/articles.gql";

const Articles = () => {
	const [categoryId, setCategoryId] = useState<string | null>(null);

	const { data: articlesData } = useArticlesQuery(categoryId ? { variables: { categoryId } } : {});
	const { data: categoriesData } = useCategoriesQuery();

	const articles = articlesData?.articles.data ?? [];
	const categories = categoriesData?.categories.data ?? [];

	const handleArticleClick = (article: ArticleFragment) => {
		router.push({ pathname: ROUTES.ARTICLE, params: { articleId: article.id } });
	};

	const handleCategoryClick = (category: CategoryFragment) => setCategoryId(category.id);

	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar style="light" />

			<View>
				<FlatList
					style={styles.categories}
					data={categories}
					horizontal
					ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => handleCategoryClick(item)}>
							<Category category={item} />
						</TouchableOpacity>
					)}
				/>
			</View>

			<FlatList
				style={styles.articles}
				data={articles}
				ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handleArticleClick(item)}>
						<ArticleCard article={item} />
					</TouchableOpacity>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
		rowGap: 20
	},
	categories: {
		paddingHorizontal: 20
	},
	articles: {
		paddingHorizontal: 20
	}
});

export default Articles;
