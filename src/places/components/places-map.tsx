import * as React from "react";
import { StyleSheet } from "react-native";
import type { Details, Region } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

import COORDINATES from "../../shared/constants/coordinates";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";
import PlaceMarker from "./place-marker";

function adjustDuplicateCoordinates(markers: any[]) {
	const seen = new Map(); // Используем Map для хранения координат и количества их повторений

	for (const marker of markers) {
		const { longitude } = marker.coordinate;
		let { latitude } = marker.coordinate;
		const key = `${latitude}-${longitude}`;

		if (seen.has(key)) {
			// Если координаты уже встречались, увеличиваем широту на минимально возможное значение
			// для упрощения примера увеличиваем только широту, можно аналогично изменять и долготу если это требуется
			latitude += 0.000_001 * seen.get(key);
			marker.coordinate.latitude = latitude; // Обновляем широту в маркере
			seen.set(key, seen.get(key) + 1); // Увеличиваем счётчик дубликатов для этой координаты
		} else {
			// Если координаты встречаются впервые, добавляем их в Map
			seen.set(key, 1);
		}
	}

	return markers; // Возвращаем обновлённый массив маркеров
}

interface PlacesMapProps {
	places?: PlaceWithDistanceFragment[] | null;
	setRegion: (region: Region, details: Details) => void;
	setPlace: (place: PlaceWithDistanceFragment) => void;
	activePlace?: PlaceWithDistanceFragment | null;
}

const PlacesMap: React.FC<PlacesMapProps> = (props) => {
	const { places, activePlace, setRegion, setPlace } = props;

	const markers = (places || []).map((place) => {
		const [longitude, latitude] = place.point?.coordinates || [];

		return { place, coordinate: { latitude, longitude }, title: place.name, description: place.name };
	});

	const adjustedMarkers = adjustDuplicateCoordinates(markers);

	return (
		<MapView initialRegion={COORDINATES.ODESSA} style={styles.map} onRegionChangeComplete={setRegion}>
			{adjustedMarkers.map((marker, index) => (
				<Marker
					key={index}
					coordinate={marker.coordinate}
					onPress={() => setPlace(marker.place)}
					zIndex={activePlace?.id === marker.place.id ? 999 : 1}
				>
					<PlaceMarker place={marker.place} isActive={activePlace?.id === marker.place.id} />
				</Marker>
			))}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%"
	}
});

export default PlacesMap;
