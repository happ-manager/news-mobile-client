import { useLocalSearchParams } from "expo-router";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Text from "../../../src/shared/components/text/text";
import COLORS from "../../../src/shared/constants/colors";
import FONTS from "../../../src/shared/constants/fonts";
import SIZES from "../../../src/shared/constants/sizes";
import { useArticleQuery } from "./gql/article.gql";

const Article = () => {
	const params = useLocalSearchParams();

	if (!params.articleId || typeof params.articleId !== "string") {
		return <Text>Oops...</Text>;
	}

	const { data, loading, error } = useArticleQuery({ variables: { articleId: params.articleId } });

	const { article } = data || {};

	if (loading || error || !article) {
		return <Text>Loading...</Text>;
	}

	// const source = require("../../../assets/images/tag.png");

	return (
		<SafeAreaView style={styles.wrapper}>
			<Text style={styles.title}>{article?.title}</Text>
			<Text style={styles.description}>{article?.description}</Text>
			<Text style={styles.content}>{article?.content}</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: { flex: 1 },
	title: {
		fontSize: SIZES.XXXL,
		color: COLORS.BLUE,
		fontFamily: FONTS.PRIMARY_BOLD
	},
	description: {
		fontSize: SIZES.LG,
		color: COLORS.GREY4,
		fontFamily: FONTS.PRIMARY,
		lineHeight: 28
	},
	content: {}
});

export default Article;
