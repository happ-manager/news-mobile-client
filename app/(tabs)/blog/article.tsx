import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../../src/shared/components/text/text";
import TEXT_THEMES from "../../../src/shared/components/text/text-themes";
import COLORS from "../../../src/shared/constants/colors";
import FONTS from "../../../src/shared/constants/fonts";
import SIZES from "../../../src/shared/constants/sizes";
import Tag from "../../../src/tags/components/tag/tag";
import TAG_THEMS from "../../../src/tags/components/tag/tag-themes";
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

	const source = require("../../../assets/images/tag.png");

	return (
		<View style={styles.wrapper}>
			<View>
				<Image source={source} contentFit={"cover"} style={styles.image} />
			</View>

			<View style={styles.container}>
				<View style={styles.header}>
					<Tag theme={TAG_THEMS.BACKGROUND} tag={{ name: "Design" } as any} />
					<Text theme={TEXT_THEMES.DATE}>2 hour ago</Text>
				</View>

				<Text style={styles.title}>{article.title}</Text>
				<Text style={styles.description}>{article.content}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: { flex: 1 },
	image: {
		height: 341
	},
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
	container: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		marginTop: -30,
		backgroundColor: COLORS.WHITE,
		paddingVertical: 20,
		paddingHorizontal: 21
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between"
	}
});

export default Article;
