import type { FC } from "react";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

import COLORS from "../constants/colors";

interface CodeInputProps {
	value: string;
	onChange: (value: string) => void;
}

const CodeInput: FC<CodeInputProps> = (props) => {
	const { value, onChange } = props;
	const ref = useBlurOnFulfill({ value, cellCount: 4 });
	const [_, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue: onChange
	});

	return (
		<CodeField
			ref={ref}
			value={value}
			onChangeText={onChange}
			cellCount={4}
			rootStyle={styles.codeFieldRoot}
			keyboardType="number-pad"
			textContentType="oneTimeCode"
			renderCell={({ index, symbol, isFocused }) => (
				<Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
					{symbol || (isFocused ? <Cursor /> : null)}
				</Text>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	codeFieldRoot: { marginTop: 0, width: "80%", alignSelf: "center" },
	cell: {
		width: 50,
		height: 50,
		fontFamily: "OutfitBold",
		fontSize: 16,
		fontWeight: "700",
		fontStyle: "normal",
		lineHeight: 50,
		color: COLORS.BROWN,
		borderWidth: 1,
		backgroundColor: COLORS.LIGHT,
		borderColor: COLORS.LIGHT,
		textAlign: "center",
		borderRadius: 15
	},
	focusCell: {
		borderColor: COLORS.GREEN
	}
});

export default CodeInput;
