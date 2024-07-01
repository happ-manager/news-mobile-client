import { merge } from "lodash";
import type { FC } from "react";
import React from "react";
import type { ViewStyle } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import type { PressableProps as RNPressableProps } from "react-native/Libraries/Components/Pressable/Pressable";
import type { SvgProps } from "react-native-svg";

import Text from "../text/text";
import type BUTTON_THEMES from "./button-themes";

interface ButtonProps extends RNPressableProps {
	IconComponent?: FC<SvgProps>;
	buttonStyle?: ViewStyle;
	text?: string;
	theme?: (typeof BUTTON_THEMES)[keyof typeof BUTTON_THEMES];
}

const Button: FC<ButtonProps> = (props) => {
	const { buttonStyle, text, theme, onPress, IconComponent } = props;
	const styles = merge({}, theme, { button: buttonStyle });

	return (
		<Pressable style={styles.button} onPress={onPress}>
			{IconComponent && <IconComponent style={styles.icon} />}
			<Text style={styles.title}>{text}</Text>
		</Pressable>
	);
};

export default Button;
