import { ResizeMode } from "expo-av";
import { Image } from "expo-image";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../../shared/components/text";
import COLORS from "../../shared/constants/colors";
import getAssetsUrl from "../../shared/utils/get-assets-url";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";

interface PlaceMarkerProps {
	place?: PlaceWithDistanceFragment | null;
	isActive?: boolean;
}

const PlaceMarker: React.FC<PlaceMarkerProps> = (props) => {
	const { place, isActive } = props;
	const imageUrl = getAssetsUrl(place?.logo?.url);

	return (
		<View style={[styles.place, isActive && styles.activePlace]}>
			<Image style={[styles.logo, isActive && styles.activeLogo]} contentFit={ResizeMode.COVER} source={imageUrl} />
		</View>
	);
};

const styles = StyleSheet.create({
	place: {},
	activePlace: {},
	logo: {
		width: 40,
		height: 40,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: COLORS.DARK_GREY,
		zIndex: 1
	},
	activeLogo: {
		width: 80,
		height: 80,
		borderColor: COLORS.PRIMARY,
		borderWidth: 3,
		zIndex: 999
	}
});

export default PlaceMarker;
