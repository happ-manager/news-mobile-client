import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { StyleSheet, type ViewStyle } from "react-native";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { ReelWithDistanceFragment } from "../gql/reel.gql";

interface ReelProps {
	reelStyle?: ViewStyle;
	reel?: ReelWithDistanceFragment | null;
}

const Reel: React.FC<ReelProps> = (props) => {
	const { reel, reelStyle } = props;
	const imageUrl = `${getAssetsUrl(reel?.image?.url)}`;

	return (
		<View style={[styles.reel, reelStyle]}>
			<Image style={styles.image} source={imageUrl} />
			<Text style={styles.text} numberOfLines={1}>
				{reel?.place.name}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	reel: {
		rowGap: 8,
		marginHorizontal: 8
	},
	image: {
		borderRadius: 50,
		width: 80,
		height: 80,
		borderWidth: 3,
		borderColor: COLORS.PRIMARY
	},
	text: {
		textAlign: "center",
		maxWidth: 80,
		fontWeight: "bold",
		fontSize: 12
	}
});

export default Reel;
