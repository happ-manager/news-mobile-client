import { StyleSheet } from "react-native";

import COLORS from "../../../shared/constants/colors";
import FONTS from "../../../shared/constants/fonts";
import SIZES from "../../../shared/constants/sizes";

const theme1 = StyleSheet.create({
	category: {
		borderRadius: 16,
		borderWidth: 1,
		borderColor: COLORS.WHITE,
		paddingHorizontal: 18,
		paddingVertical: 10
	},
	name: {
		opacity: 0.8,
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.MD,
		lineHeight: 14,
		color: COLORS.WHITE
	},
	image: {}
});

const theme2 = StyleSheet.create({
	category: {
		position: "relative",
		width: 145,
		height: 232,
		borderRadius: 16
	},
	name: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		padding: 15,
		fontFamily: "Outfit",
		fontSize: 24,
		fontWeight: "400",
		fontStyle: "normal",
		lineHeight: 32,
		letterSpacing: 1,
		color: "#FFFFFF",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderRadius: 16
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 16
	}
});

const themes = {
	1: theme1,
	2: theme2
};

export default themes;
