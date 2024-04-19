import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import SCREEN from "../constants/screen";

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "space", 0, "delete"] as const;
const _keySize = SCREEN.WIDTH / 4;
const _passcodeSpacing = (SCREEN.WIDTH - 3 * _keySize) / 2;

interface NumPadProps {
	onPress: (key: string | number) => void;
}

const NumPad: React.FC<NumPadProps> = (props) => {
	const { onPress } = props;
	return (
		<View style={styles.container}>
			{keys.map((key) => {
				if (key === "space") {
					return <View style={styles.space} key="space" />;
				}
				return (
					<TouchableOpacity key={key} style={styles.key} onPress={() => onPress(key)}>
						<View>
							{key === "delete" ? (
								<MaterialCommunityIcons name="keyboard-backspace" size={42} color="rgba(0,0,0,0.3)" />
							) : (
								<Text style={styles.text}>{key}</Text>
							)}
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		paddingHorizontal: _passcodeSpacing,
		alignItems: "center"
	},
	key: {
		width: _keySize,
		height: _keySize,
		alignItems: "center",
		justifyContent: "center"
	},
	space: { width: _keySize },
	text: { color: "#000", fontSize: 32, fontWeight: "700" }
});

export default NumPad;
