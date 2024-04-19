import type { ReactNode } from "react";
import React from "react";
import type { TextProps as RNTextProps } from "react-native";
import type { StyleProp } from "react-native";
import type { TextStyle } from "react-native";
import { StyleSheet, Text as RNText } from "react-native";

interface TextProps extends RNTextProps {
	children: ReactNode;
	textStyle?: StyleProp<TextStyle>;
	fontType?: "primary";
}

const Text: React.FC<TextProps> = (props) => {
	const { textStyle, children, fontType } = props;

	const fontFamily = {
		primary: "Geologica"
	}[fontType || "primary"];

	return (
		<RNText style={[styles.defaultFontStyle, { fontFamily }, textStyle]} {...props}>
			{children}
		</RNText>
	);
};

const styles = StyleSheet.create({
	defaultFontStyle: {
		fontFamily: "Geologica"
	}
});

export default Text;
