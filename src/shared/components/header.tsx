import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useApp from "../hooks/use-app";
import typedStyles from "../utils/typed-styles";
import typedStylesUtil from "../utils/typed-styles";
import Text from "./text";

const Header = () => {
	const insets = useSafeAreaInsets();
	const topInsetsStyles = typedStyles({ paddingTop: insets.top });

	const { offsetY } = useApp();
	const headerY = useRef(new Animated.Value(-110)).current; // начальное положение за пределами экрана
	const headerTranslateY = headerY.interpolate({
		inputRange: [0, 100],
		outputRange: [0, -110],
		extrapolate: "clamp"
	});
	const headerTranslateStyles = typedStylesUtil({ transform: [{ translateY: headerTranslateY }] });

	useEffect(() => {
		headerY.setValue(offsetY);
	}, [offsetY, headerY]);

	return (
		<Animated.View style={[styles.header, topInsetsStyles, headerTranslateStyles]}>
			<Link href={"/aggregator"}>
				<Image
					source={require("../../../assets/images/full-logo-horizontal.png")}
					contentFit={"contain"}
					style={styles.logo}
				/>
			</Link>
			<Link href={"/aggregator"}>
				<Text>Aggregator</Text>
			</Link>
			<Link href={"/ai"}>
				<Text>AI</Text>
			</Link>
			<Link href={"/ordering"}>
				<Text>Ordering</Text>
			</Link>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	header: {
		position: "absolute",
		left: 0,
		top: 0,
		zIndex: 1000,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 30
	},
	logo: {
		width: 82,
		height: 50
	},
	user: {
		fontSize: 16
	}
});

export default Header;
