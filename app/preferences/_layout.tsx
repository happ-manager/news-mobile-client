import { Stack } from "expo-router";
import * as React from "react";

const PreferencesLayout = () => (
	<Stack screenOptions={{ headerShown: false }}>
		<Stack.Screen name="categories" />
	</Stack>
);

export default PreferencesLayout;
