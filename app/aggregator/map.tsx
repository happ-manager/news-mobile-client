import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import type { Region } from "react-native-maps";

import PlacesBottomSheet from "../../src/places/components/places-bottom-sheet";
import PlacesCarousel from "../../src/places/components/places-carousel";
import PlacesMap from "../../src/places/components/places-map";
import type { PlaceWithDistanceFragment } from "../../src/places/gql/place.gql";
import Reels from "../../src/reels/components/reels";
import type { ReelWithDistanceFragment } from "../../src/reels/gql/reel.gql";
import COLORS from "../../src/shared/constants/colors";
import COORDINATES from "../../src/shared/constants/coordinates";
import Tags from "../../src/tags/components/tags";
import type { TagFragment } from "../../src/tags/gql/tag.gql";
import { usePlacesNearbyQuery, useReelsNearbyQuery, useTagsQuery } from "./gql/aggregator.gql";

const Map = () => {
	const [region, setRegion] = useState(COORDINATES.ODESSA);
	const [activePlace, setActivePlace] = useState<PlaceWithDistanceFragment | null>();

	const [places, setPlaces] = useState<PlaceWithDistanceFragment[] | null>();
	const [reels, setReels] = useState<ReelWithDistanceFragment[] | null>();
	const [tags, setTags] = useState<TagFragment[] | null>();

	const queryVariables = useMemo(() => ({ lat: region.latitude, lng: region.longitude }), [region]);

	useTagsQuery({
		variables: { filtersArgs: [{ key: "isHidden", operator: "=", value: "false" }] },
		onCompleted: (data) => setTags(data.tags.data)
	});
	usePlacesNearbyQuery({ variables: queryVariables, onCompleted: (data) => setPlaces(data.getNearby.data) });
	useReelsNearbyQuery({ variables: queryVariables, onCompleted: (data) => setReels(data.getReelsNearby.data) });

	const handleSetRegion = useCallback((region: Region) => setRegion(region), []);
	const handleSetActivePlace = useCallback((place: PlaceWithDistanceFragment) => setActivePlace(place), []);

	return (
		<View style={styles.view}>
			<SafeAreaView>
				<View style={styles.header}>
					<Reels reels={reels} />
					<Tags tags={tags} />
				</View>
			</SafeAreaView>

			<GestureHandlerRootView style={styles.gestureView}>
				<PlacesMap
					places={places}
					activePlace={activePlace}
					setPlace={handleSetActivePlace}
					setRegion={handleSetRegion}
				/>

				{activePlace && (
					<PlacesCarousel
						customStyle={styles.carousel}
						places={places}
						activePlace={activePlace}
						setPlace={handleSetActivePlace}
					/>
				)}

				<PlacesBottomSheet places={places} />
			</GestureHandlerRootView>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flex: 1
	},
	gestureView: {
		flex: 1
	},
	carousel: {
		position: "absolute",
		width: "100%",
		bottom: "15%"
	},
	header: {
		rowGap: 16,
		paddingBottom: 16,
		zIndex: 500,
		backgroundColor: COLORS.WHITE,
		borderBottomColor: COLORS.GREY,
		borderBottomWidth: 1
	}
});

export default Map;
