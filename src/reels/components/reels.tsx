import React from "react";
import { FlatList, View } from "react-native";
import { StyleSheet, type ViewStyle } from "react-native";

import type { ReelWithDistanceFragment } from "../gql/reel.gql";
import Reel from "./reel";

interface ReelsProps {
	reelsStyle?: ViewStyle;
	reels?: ReelWithDistanceFragment[] | null;
}

const Reels: React.FC<ReelsProps> = (props) => {
	const { reelsStyle, reels } = props;
	const tagStyles = (reels || []).map((tag, index) => ({
		...(index === 0 && styles.firstReel),
		...(index === (reels || []).length - 1 && styles.lastReel)
	}));

	return (
		<View style={reelsStyle}>
			<FlatList
				data={reels}
				horizontal={true}
				renderItem={({ item, index }) => <Reel reel={item} reelStyle={tagStyles ? tagStyles[index] : undefined} />}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	firstReel: {
		marginLeft: 16
	},
	lastReel: {
		marginRight: 16
	}
});

export default Reels;
