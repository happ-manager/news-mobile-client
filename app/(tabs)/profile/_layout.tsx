import { Slot } from "expo-router";
import * as React from "react";
import { View } from "react-native";

const ProfileLayout = () => (
	<View style={{ flex: 1 }}>
		<Slot />
	</View>
);

export default ProfileLayout;
