import { merge } from "lodash";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import { StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";

import COLORS from "../constants/colors";
import FONTS from "../constants/fonts";
import Icons from "../constants/icons";
import SIZES from "../constants/sizes";
import Text from "./text/text";

interface BackProps extends PropsWithChildren {
	backStyle?: ViewStyle;
	text?: string;
	handleClick?: () => void;
}

const Back: FC<BackProps> = (props) => {
	const { backStyle, text, handleClick } = props;

	const styles = merge({}, theme1, { back: backStyle });

	return (
		<TouchableOpacity style={styles.back} onPress={() => handleClick && handleClick()}>
			<Icons.ArrowLeft />
			<Text textStyle={styles.text}>{text || "Назад"}</Text>
		</TouchableOpacity>
	);
};

const theme1 = StyleSheet.create({
	back: {
		flexDirection: "row",
		alignItems: "center",
		columnGap: 6
	},
	text: {
		fontSize: SIZES.XXXL,
		fontFamily: FONTS.PRIMARY,
		color: COLORS.BLUE
	}
});

export default Back;
