import { Image } from "expo-image";
import type { FC } from "react";
import React from "react";
import { View } from "react-native";
import { StyleSheet, type ViewStyle } from "react-native";

import Text from "../../shared/components/text/text";
import COLORS from "../../shared/constants/colors";
import FONTS from "../../shared/constants/fonts";
import SIZES from "../../shared/constants/sizes";
import Tag from "../../tags/components/tag/tag";
import TAG_THEMS from "../../tags/components/tag/tag-themes";
import type { ArticleFragment } from "../gql/article.gql";

interface ArticleProps {
	articleStyle?: ViewStyle;
	article?: ArticleFragment | null;
}

const Article: FC<ArticleProps> = (props) => {
	const { article, articleStyle } = props;

	const source = require("../../../assets/images/tag.png");

	return (
		<View style={[styles.artilce, articleStyle]}>
			<View style={styles.left}>
				<Tag theme={TAG_THEMS.TEXT} tag={{ name: "DESIGN" } as any}></Tag>
				<Text style={styles.title}>{article?.title}</Text>
				<Text style={styles.description}>{article?.description}</Text>

				<View style={styles.info}>
					<Text style={styles.date}>2 hour ago</Text>
					<Text style={styles.likes}>89</Text>
				</View>
			</View>

			<View>
				<Image source={source} contentFit={"cover"} style={styles.image} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	artilce: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	tag: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.SM,
		color: COLORS.LIGHT_BLUE,
		letterSpacing: 1
	},
	title: {
		fontFamily: FONTS.PRIMARY_BOLD,
		fontSize: SIZES.XL,
		color: COLORS.DARK_BLUE,
		letterSpacing: 1,
		marginTop: 8
	},
	description: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.LG,
		color: COLORS.GREY3,
		letterSpacing: 1,
		marginTop: 8
	},
	left: {
		flex: 1
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 10
	},
	info: {
		flexDirection: "row",
		columnGap: 20,
		marginTop: 8
	},
	date: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.LG,
		letterSpacing: 1,
		color: COLORS.GREY5
	},
	likes: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.LG,
		letterSpacing: 1,
		color: COLORS.GREY5
	}
});

export default Article;
