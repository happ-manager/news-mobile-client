import * as React from "react";
import { StyleSheet } from "react-native";

import Text from "../../shared/components/text";
import type { PlaceWithDistanceFragment } from "../gql/place.gql";
import PlaceCardHorizontal from "./place-card-horizontal";
import PlaceCardVertical from "./place-card-vertical";

interface PlacePreviewProps {
	place?: PlaceWithDistanceFragment | null;
	theme?: "vertical" | "horizontal";
}

const PlaceCard: React.FC<PlacePreviewProps> = (props) => {
	const { theme = "vertical" } = props;

	return theme === "vertical" ? <PlaceCardVertical {...props} /> : <PlaceCardHorizontal {...props} />;
};

export default PlaceCard;
