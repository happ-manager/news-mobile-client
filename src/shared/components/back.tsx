import { merge } from "lodash";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import { StyleSheet, View, type ViewStyle } from "react-native";

import COLORS from "../constants/colors";
import FONTS from "../constants/fonts";
import Icons from "../constants/icons";
import SIZES from "../constants/sizes";
import Text from "./text/text";

interface BackProps extends PropsWithChildren {
	backStyle?: ViewStyle;
}

const Back: FC<BackProps> = (props) => {
	const { backStyle } = props;

	const styles = merge({}, theme1, { back: backStyle });

	return (
		<View style={styles.back}>
			<Icons.ArrowLeft />
			<Text textStyle={styles.text}>Profile</Text>
		</View>
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
