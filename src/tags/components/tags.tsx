import React from "react";
import { FlatList, View } from "react-native";
import { StyleSheet, type ViewStyle } from "react-native";

import type { TagFragment } from "../gql/tag.gql";
import Tag from "./tag";

interface TagsProps {
	tagsStyle?: ViewStyle;
	tags?: TagFragment[] | null;
}

const Tags: React.FC<TagsProps> = (props) => {
	const { tagsStyle, tags } = props;
	const tagStyles = (tags || []).map((tag, index) => ({
		...(index === 0 && styles.firstTag),
		...(index === (tags || []).length - 1 && styles.lastTag)
	}));

	return (
		<View style={tagsStyle}>
			<FlatList
				data={tags}
				horizontal={true}
				renderItem={({ item, index }) => <Tag tag={item} tagStyle={tagStyles ? tagStyles[index] : undefined} />}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	firstTag: {
		marginLeft: 16
	},
	lastTag: {
		marginRight: 16
	}
});

export default Tags;
