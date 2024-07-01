import { router } from "expo-router";
import * as React from "react";
import { useRef } from "react";
import { Animated, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import Article from "../../../src/articles/components/article";
import type { ArticleFragment } from "../../../src/articles/gql/article.gql";
import Category from "../../../src/categories/components/category/category";
import type { CategoryFragment } from "../../../src/categories/gql/category.gql";
import Header from "../../../src/shared/components/header";
import Text from "../../../src/shared/components/text/text";
import TEXT_THEMES from "../../../src/shared/components/text/text-themes";
import COLORS from "../../../src/shared/constants/colors";
import ROUTES from "../../../src/shared/constants/routes";
import Tag from "../../../src/tags/components/tag/tag";
import TAG_THEMS from "../../../src/tags/components/tag/tag-themes";
import type { TagFragment } from "../../../src/tags/gql/tag.gql";
import { useArticlesQuery, useCategoriesQuery, useTagsQuery } from "./gql/articles.gql";

const Articles = () => {
	const { data: articlesData } = useArticlesQuery();
	const { data: tagsData } = useTagsQuery();
	const { data: categoriesData } = useCategoriesQuery();

	const articles = articlesData?.articles.data ?? [];
	const tags = tagsData?.tags.data ?? [];
	const categories = categoriesData?.categories.data ?? [];

	const handleCategoryClick = (category: CategoryFragment) => {
		router.push({ pathname: ROUTES.ARTICLE, params: { categoryId: category.id } });
	};

	const handleTagClick = (tag: TagFragment) => {
		router.push({ pathname: ROUTES.ARTICLE, params: { tagId: tag.id } });
	};

	const handleArticleClick = (article: ArticleFragment) => {
		router.push({ pathname: ROUTES.ARTICLE, params: { articleId: article.id } });
	};

	const scrollY = useRef(new Animated.Value(0)).current;

	const headerHeight = scrollY.interpolate({
		inputRange: [0, 200],
		outputRange: [200, 0],
		extrapolate: "clamp"
	});

	const opacity = scrollY.interpolate({
		inputRange: [0, 200],
		outputRange: [1, 0],
		extrapolate: "clamp"
	});

	return (
		<View style={styles.wrapper}>
			<Animated.View style={[styles.top, { height: headerHeight }]}>
				<Animated.View style={{ opacity }}>
					<Header />
					<FlatList
						style={styles.list}
						data={tags}
						horizontal
						ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => handleTagClick(item)}>
								<Tag tag={item} theme={TAG_THEMS.OUTLINED} />
							</TouchableOpacity>
						)}
					/>
				</Animated.View>
			</Animated.View>

			<Animated.ScrollView
				contentContainerStyle={styles.scrollViewContent}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
				scrollEventThrottle={16}
			>
				<View style={styles.container}>
					<View style={styles.info}>
						<Text theme={TEXT_THEMES.TITLE}>Your Topics</Text>
						<Text theme={TEXT_THEMES.DESCRIPTION}>This is selected topics</Text>
					</View>

					<FlatList
						style={styles.list}
						data={categories}
						horizontal
						ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => handleCategoryClick(item)}>
								<Category category={item} theme={2} />
							</TouchableOpacity>
						)}
					/>

					<View>
						<FlatList
							data={articles}
							ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
							renderItem={({ item }) => (
								<TouchableOpacity onPress={() => handleArticleClick(item)}>
									<Article article={item} />
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Animated.ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
		rowGap: 20
	},
	top: {
		padding: 20,
		rowGap: 22
	},
	list: {
		rowGap: 10
	},
	scrollViewContent: {
		paddingTop: 10
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
		paddingVertical: 24,
		paddingHorizontal: 20,
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40
	},
	info: {
		rowGap: 5,
		marginBottom: 24
	}
});

export default Articles;
