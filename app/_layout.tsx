import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import * as React from "react";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

import useAuth from "../src/auth/hooks/use-auth";
import AuthProvider from "../src/auth/providers/auth.provider";
import createApolloClient from "../src/shared/functions/create-apollo-client";
import AppProvider from "../src/shared/providers/app.provider";

const AppLayout = () => {
	const { accessToken } = useAuth();
	const router = useRouter();
	const [fontsLoaded, fontError] = useFonts({
		Geologica: require("../assets/fonts/Geologica/static/Geologica-Regular.ttf"),
		GeologicaBold: require("../assets/fonts/Geologica/static/Geologica-Bold.ttf")
	});
	const [client, setClient] = useState(() => createApolloClient(accessToken));

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync();
			router.push("aggregator/map");
		}
	}, [fontsLoaded, fontError]);

	useEffect(() => {
		setClient(createApolloClient(accessToken));
	}, [accessToken]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<AppProvider>
				<ApolloProvider client={client}>
					<AuthProvider>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name="auth" options={{ presentation: "modal" }} />
							<Stack.Screen name="products" options={{ presentation: "modal" }} />
							<Stack.Screen name="orders" options={{ presentation: "modal" }} />
						</Stack>
					</AuthProvider>
				</ApolloProvider>
			</AppProvider>
		</SafeAreaProvider>
	);
};

export default AppLayout;
