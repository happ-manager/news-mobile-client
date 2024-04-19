import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import * as React from "react";
import { useMemo, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Search from "../../../assets/icons/search.svg";
import Text from "../../shared/components/text";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";
import PlaceCard from "./place-card";

interface PlacesCarouselProps {
	places?: PlaceWithDistanceFragment[] | null;
}

const PlacesBottomSheet: React.FC<PlacesCarouselProps> = (props) => {
	const { places } = props;

	const bottomSheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["10%", "100%"], []);

	return (
		<BottomSheet style={styles.container} ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
			<BottomSheetView style={styles.contentContainer}>
				<View style={styles.header}>
					<Text style={styles.text}>{places?.length} закладів</Text>
					<Search style={styles.search}>Search</Search>
				</View>

				<FlatList data={places} renderItem={(place) => <PlaceCard key={place.index} place={place.item} />}></FlatList>
			</BottomSheetView>
		</BottomSheet>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 24,
		rowGap: 16
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	text: {
		fontSize: 16,
		fontWeight: "800"
	},
	search: {}
});

export default PlacesBottomSheet;
