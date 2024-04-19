import { ResizeMode } from "expo-av";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";

interface PlacePreviewProps {
	place?: PlaceWithDistanceFragment | null;
}

const PlacesCardVertical: React.FC<PlacePreviewProps> = (props) => {
	const { place } = props;
	const imageUrl = getAssetsUrl(place?.image?.url);

	return (
		<View style={styles.place}>
			<Image style={styles.image} contentFit={ResizeMode.COVER} source={imageUrl} />
			<View style={styles.content}>
				<Text style={styles.name}>{place?.name}</Text>
				<View style={styles.info}>
					<Text numberOfLines={1} style={styles.address}>
						{place?.address}
					</Text>
					<Text style={styles.time}>
						{place?.weekdayStart} - {place?.weekdayEnd}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	place: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 24
	},
	image: {
		width: "100%",
		height: 154,
		borderRadius: 24
	},
	name: {
		color: COLORS.BLACK,
		fontWeight: "600",
		fontSize: 16
	},
	content: {
		paddingVertical: 8,
		rowGap: 5
	},
	info: {
		flexDirection: "row",
		columnGap: 16
	},
	address: {
		color: COLORS.DARK_GREY,
		flex: 1
	},
	time: {
		color: COLORS.DARK_GREY
	}
});

export default PlacesCardVertical;
