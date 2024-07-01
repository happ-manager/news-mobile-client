import { merge } from "lodash";
import type { FC } from "react";
import React from "react";
import type { TextProps as RNTextProps } from "react-native";
import type { StyleProp } from "react-native";
import type { TextStyle } from "react-native";
import { Text as RNText } from "react-native";

import type TEXT_THEMES from "./text-themes";

interface TextProps extends RNTextProps {
	textStyle?: StyleProp<TextStyle>;
	theme?: (typeof TEXT_THEMES)[keyof typeof TEXT_THEMES];
}

const Text: FC<TextProps> = (props) => {
	const { textStyle, children, theme } = props;
	const styles = merge({}, theme, { text: textStyle });

	return (
		<RNText style={styles.text} {...props}>
			{children}
		</RNText>
	);
};

export default Text;
