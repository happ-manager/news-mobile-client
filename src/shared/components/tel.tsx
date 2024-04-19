import React from "react";
import type { Control, FieldErrors } from "react-hook-form";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import MaskInput from "react-native-mask-input";

import MASKS from "../constants/masks";

interface TelProps {
	control: Control<{ phone: string }>;
	errors: FieldErrors<{ phone: string }>;
}

const Tel: React.FC<TelProps> = ({ control, errors }) => (
	<View style={styles.container}>
		<Controller
			control={control}
			render={({ field: { onChange, onBlur, value } }) => (
				<MaskInput
					value={value}
					onChangeText={onChange}
					onBlur={onBlur}
					mask={MASKS.UKRAINE_TEL}
					textContentType="telephoneNumber"
					keyboardType="phone-pad"
					style={styles.input}
				/>
			)}
			name="phone"
			rules={{ required: true }}
			defaultValue=""
		/>
		{errors.phone && <Text>This is required.</Text>}
	</View>
);

const styles = StyleSheet.create({
	container: {},
	input: {
		height: 50,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 15,
		fontSize: 18,
		color: "black",
		backgroundColor: "white"
	},
	errorText: {
		color: "red",
		marginTop: 5
	}
});

export default Tel;
