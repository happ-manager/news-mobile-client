import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";
import FONTS from "../../constants/fonts";
import SIZES from "../../constants/sizes";

const BLACK = StyleSheet.create({
	button: {
		backgroundColor: COLORS.BLACK,
		padding: 16,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontFamily: FONTS.PRIMARY_BOLD,
		color: COLORS.WHITE,
		fontSize: SIZES.LG,
		letterSpacing: 1,
		textAlign: "center"
	}
});

const OUTLINED = StyleSheet.create({
	button: {
		borderRadius: 8,
		borderWidth: 1,
		padding: 10,
		borderColor: "rgba(203, 209, 218, 1.0)",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		columnGap: 14
	},
	title: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.MD,
		color: COLORS.BLACK
	},
	icon: {
		width: SIZES.MD,
		height: SIZES.MD
	}
});

const BUTTON_THEMES = {
	BLACK,
	OUTLINED
};

export default BUTTON_THEMES;
