import { merge } from "lodash";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import { StyleSheet, type ViewStyle } from "react-native";

import COLORS from "../constants/colors";
import FONTS from "../constants/fonts";
import SIZES from "../constants/sizes";
import Text from "./text/text";

interface DividerProps extends PropsWithChildren {
	dividerStyle?: ViewStyle;
}

const Divider: FC<DividerProps> = (props) => {
	const { dividerStyle, children } = props;

	const styles = merge({}, theme1, { divider: dividerStyle });

	return <Text style={styles.divider}>{children}</Text>;
};

const theme1 = StyleSheet.create({
	divider: {
		fontFamily: FONTS.PRIMARY_BOLD,
		fontSize: SIZES.LG,
		color: COLORS.GREY6,
		marginTop: 24
	}
});

export default Divider;
