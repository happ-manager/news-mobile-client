import React, { type ReactNode } from "react";
import type { PressableProps as RNPressableProps } from "react-native";
import { Pressable, StyleSheet, type ViewStyle } from "react-native";

interface ButtonProps extends RNPressableProps {
	children: ReactNode;
	buttonStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { buttonStyle, children, onPress } = props;

	return (
		<Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {}
});

export default Button;
