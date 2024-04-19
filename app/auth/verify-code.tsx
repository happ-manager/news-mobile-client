import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

import useAuth from "../../src/auth/hooks/use-auth";
import Button from "../../src/shared/components/button";
import Text from "../../src/shared/components/text";
import COLORS from "../../src/shared/constants/colors";

const VerifyCode: React.FC = () => {
	const router = useRouter();
	const { verifyCode } = useAuth();

	const [value, setValue] = useState("");
	const ref = useBlurOnFulfill({ value, cellCount: 4 });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue
	});

	const onPress = async () => {
		await verifyCode({ variables: { code: Number(value) as any as number } });
		router.back();
	};

	return (
		<View style={styles.container}>
			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={4}
				rootStyle={styles.codeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				renderCell={({ index, symbol, isFocused }) => (
					<Text
						key={index}
						style={[styles.cell, isFocused && styles.focusCell]}
						onLayout={getCellOnLayoutHandler(index)}
					>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
				)}
			/>
			<Button buttonStyle={styles.button} onPress={onPress}>
				<Text>Получить СМС</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30
	},
	button: {
		borderRadius: 15,
		padding: 15,
		backgroundColor: COLORS.PRIMARY,
		marginTop: 30
	},
	root: { flex: 1, padding: 20 },
	title: { textAlign: "center", fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 40,
		height: 40,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 2,
		borderColor: "#00000030",
		textAlign: "center"
	},
	focusCell: {
		borderColor: "#000"
	}
});

export default VerifyCode;
