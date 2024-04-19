import React from "react";
import { View } from "react-native";
import { StyleSheet, type ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { TagFragment } from "../gql/tag.gql";

interface TagProps {
	tagStyle?: ViewStyle;
	tag?: TagFragment | null;
}

const Tag: React.FC<TagProps> = (props) => {
	const { tag, tagStyle } = props;
	const iconUrl = `${getAssetsUrl(tag?.icon, "icons")}.svg`;

	return (
		<View style={[styles.tag, tagStyle]}>
			<SvgUri width="16" height="16" uri={iconUrl} />
			<Text style={styles.text}>{tag?.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	tag: {
		flexDirection: "row",
		columnGap: 8,
		padding: 8,
		borderRadius: 16,
		borderColor: COLORS.GREY,
		borderWidth: 1,
		marginHorizontal: 4
	},
	text: {
		fontSize: 12,
		fontWeight: "500"
	}
});

export default Tag;
