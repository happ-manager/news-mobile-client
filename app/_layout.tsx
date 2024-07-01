import "core-js/stable/atob";

import { ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import type { FC, PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

import type { AuthContextProps } from "../src/auth/contextes/auth.context";
import useAuth from "../src/auth/hooks/use-auth";
import AuthProvider from "../src/auth/providers/auth.provider";
import ConfigProvider from "../src/config/providers/config.provider";
import COLORS from "../src/shared/constants/colors";
import ROUTES from "../src/shared/constants/routes";
import createApolloClient from "../src/shared/functions/create-apollo-client";

const AppProviders: FC<PropsWithChildren> = ({ children }) => {
	const [authContext, setAuthContext] = useState<AuthContextProps>();
	const [client, setClient] = useState(() => createApolloClient());

	useEffect(() => {
		setClient(createApolloClient(authContext));
	}, [authContext]);

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<ConfigProvider>
				<ApolloProvider client={client}>
					<AuthProvider setAuthContext={setAuthContext}>{children}</AuthProvider>
				</ApolloProvider>
			</ConfigProvider>
		</SafeAreaProvider>
	);
};

const AppPreload = () => {
	const { user, isInit } = useAuth();
	const router = useRouter();
	const [fontsLoaded, fontError] = useFonts({
		Outfit: require("../assets/fonts/Outfit/static/Outfit-Regular.ttf"),
		OutfitBold: require("../assets/fonts/Outfit/static/Outfit-Bold.ttf")
	});

	useEffect(() => {
		const isFonts = fontsLoaded || fontError;

		if (!isFonts || !isInit) {
			return;
		}

		const href = user ? ROUTES.ARTICLES : ROUTES.LOGIN;

		SplashScreen.hideAsync();
		router.push(href);
	}, [fontsLoaded, fontError, isInit]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Stack screenOptions={{ headerShown: false }}></Stack>
		</View>
	);
};

const AppLayout = () => (
	<AppProviders>
		<AppPreload />
	</AppProviders>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE
	}
});

export default AppLayout;
