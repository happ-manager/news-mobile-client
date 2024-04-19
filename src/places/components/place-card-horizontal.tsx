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

const PlacesCardHorizontal: React.FC<PlacePreviewProps> = (props) => {
	const { place } = props;
	const imageUrl = getAssetsUrl(place?.image?.url);

	return (
		<View style={styles.place}>
			<Image style={styles.image} contentFit={ResizeMode.COVER} source={imageUrl} />
			<View style={styles.content}>
				<Text style={styles.name}>{place?.name}</Text>
				<Text numberOfLines={1} style={styles.address}>
					{place?.address}
				</Text>
				<Text style={styles.time}>
					{place?.weekdayStart} - {place?.weekdayEnd}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	place: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 24,
		flexDirection: "row",
		overflow: "hidden"
	},
	image: {
		width: 125,
		height: 125,
		borderBottomLeftRadius: 24,
		borderTopLeftRadius: 24
	},
	name: {
		color: COLORS.BLACK,
		fontWeight: "600",
		fontSize: 16
	},
	content: {
		padding: 8,
		rowGap: 5
	},
	address: {
		color: COLORS.DARK_GREY
	},
	time: {
		color: COLORS.DARK_GREY
	}
});

export default PlacesCardHorizontal;
