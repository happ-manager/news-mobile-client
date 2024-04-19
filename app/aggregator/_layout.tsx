import { Slot } from "expo-router";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import COLORS from "../../src/shared/constants/colors";

const AggregatorLayout = () => (
	<View style={styles.aggregator}>
		<Slot />
	</View>
);

const styles = StyleSheet.create({
	aggregator: { flex: 1, backgroundColor: COLORS.WHITE }
});

export default AggregatorLayout;
