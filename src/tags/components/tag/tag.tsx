import { merge } from "lodash";
import React, { type FC } from "react";
import type { ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import Text from "../../../shared/components/text/text";
import type { TagFragment } from "../../gql/tag.gql";
import type TAG_THEMS from "./tag-themes";

interface TagProps {
	tag: TagFragment;
	tagStyle?: ViewStyle;
	theme?: (typeof TAG_THEMS)[keyof typeof TAG_THEMS];
}

const Tag: FC<TagProps> = (props) => {
	const { tag, theme, tagStyle } = props;
	const styles = merge({}, theme, { tag: tagStyle });

	return (
		<View style={styles.tag}>
			<Text style={styles.name}>{tag.name}</Text>
		</View>
	);
};

export default Tag;
