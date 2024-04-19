import type { LinearGradientProps } from "expo-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import React from "react";
import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

interface GradientProps extends LinearGradientProps {
	children: ReactNode;
	gradientStyle: ViewStyle;
}

const Gradient: React.FC<GradientProps> = (props) => {
	const { gradientStyle, children, colors, start, end } = props;

	return (
		<LinearGradient colors={colors} start={start} end={end} style={[styles.gradient, gradientStyle]}>
			{children}
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradient: {}
});

export default Gradient;
