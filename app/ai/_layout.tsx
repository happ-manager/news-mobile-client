import { Slot } from "expo-router";
import * as React from "react";
import { View } from "react-native";

import Header from "../../src/shared/components/header";

const AiLayout = () => (
	<View style={{ flex: 1 }}>
		<Header />
		<Slot />
	</View>
);

export default AiLayout;
