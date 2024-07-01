import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";
import FONTS from "../../constants/fonts";
import SIZES from "../../constants/sizes";

const LABEL = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.LG,
		color: COLORS.BROWN
	}
});

const DATE = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.SM,
		color: COLORS.GREY5,
		letterSpacing: 1
	}
});

const TAG = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.SM,
		color: COLORS.WHITE,
		backgroundColor: COLORS.LIGHT_BLUE,
		letterSpacing: 1
	}
});

const TITLE = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.XXXL,
		color: COLORS.DARK_BLUE,
		letterSpacing: 1
	}
});

const DESCRIPTION = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.LG,
		color: COLORS.GREY4,
		letterSpacing: 1
	}
});

const HIGHLIGHTED = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		color: COLORS.GREEN
	}
});

const SECONDARY = StyleSheet.create({
	text: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.SM,
		color: COLORS.GREY2
	}
});

const TEXT_THEMES = {
	LABEL,
	DATE,
	TAG,
	TITLE,
	DESCRIPTION,
	HIGHLIGHTED,
	SECONDARY
};

export default TEXT_THEMES;
