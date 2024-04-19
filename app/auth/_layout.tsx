import { Stack } from "expo-router";
import * as React from "react";

const AuthLayout = () => (
	<Stack screenOptions={{ headerShown: false }}>
		<Stack.Screen name="login" />
		<Stack.Screen name="verify-code" />
	</Stack>
);

export default AuthLayout;
