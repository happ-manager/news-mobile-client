import * as React from "react";
import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, type ViewStyle } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import Text from "../../shared/components/text";
import SCREEN from "../../shared/constants/screen";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";
import PlaceCard from "./place-card";

interface PlacesCarouselProps {
	activePlace?: PlaceWithDistanceFragment | null;
	places?: PlaceWithDistanceFragment[] | null;
	customStyle?: ViewStyle;
	setPlace: (place: PlaceWithDistanceFragment) => void;
}

const PlacesCarousel: React.FC<PlacesCarouselProps> = (props) => {
	const { customStyle, places, activePlace, setPlace } = props;
	const carouselRef = useRef<any>(null);

	useEffect(() => {
		if (!activePlace) {
			return;
		}

		const index = (places || []).findIndex((category) => category.id === activePlace.id);

		if (index !== -1 && carouselRef.current) {
			carouselRef.current.scrollTo({ index, animated: true });
		}
	}, [activePlace, places]);

	return (
		<Carousel
			ref={carouselRef}
			style={[customStyle, styles.carousel]}
			width={SCREEN.WIDTH}
			height={200}
			loop
			mode="parallax"
			data={places || []}
			scrollAnimationDuration={200}
			onSnapToItem={(index) => setPlace((places || [])[index])}
			renderItem={({ item }) => (
				<Pressable onPress={() => setPlace(item)}>
					<PlaceCard key={item.id} theme={"horizontal"} place={item} />
				</Pressable>
			)}
		></Carousel>
	);
};

const styles = StyleSheet.create({
	carousel: {
		flex: 1
	}
});

export default PlacesCarousel;
