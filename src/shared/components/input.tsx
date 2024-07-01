import type { FC } from "react";
import React from "react";
import type { TextInputProps } from "react-native";
import { StyleSheet, TextInput, View } from "react-native";
import type { Mask } from "react-native-mask-input";
import MaskInput from "react-native-mask-input";

import COLORS from "../constants/colors";
import FONTS from "../constants/fonts";
import SIZES from "../constants/sizes";
import Text from "./text/text";
import TEXT_THEMES from "./text/text-themes";

interface InputProps extends TextInputProps {
	label?: string;
	error?: string;
	mask?: Mask;
}

const Input: FC<InputProps> = (props) => {
	const { label, onChangeText, onBlur, value, error, placeholder, secureTextEntry, textContentType, mask } = props;

	return (
		<View style={styles.container}>
			{label && <Text theme={TEXT_THEMES.INPUT_LABEL}>{label}</Text>}

			{mask ? (
				<MaskInput
					style={[styles.input, Boolean(error) && styles.errorInput]}
					onChangeText={onChangeText}
					onBlur={onBlur}
					value={value}
					secureTextEntry={secureTextEntry}
					mask={mask}
					textContentType={textContentType}
				/>
			) : (
				<TextInput
					style={[styles.input, Boolean(error) && styles.errorInput]}
					onChangeText={onChangeText}
					onBlur={onBlur}
					value={value}
					placeholder={placeholder}
					secureTextEntry={secureTextEntry}
				/>
			)}
			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		rowGap: 12
	},
	input: {
		borderRadius: 15,
		paddingHorizontal: 12,
		paddingVertical: 19,
		fontSize: SIZES.MD,
		fontFamily: FONTS.PRIMARY,
		backgroundColor: COLORS.LIGHT,
		color: COLORS.BLACK
	},
	errorInput: {},
	errorText: {}
});

export default Input;
