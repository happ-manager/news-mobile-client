import { StyleSheet } from "react-native";

import COLORS from "../../../shared/constants/colors";
import FONTS from "../../../shared/constants/fonts";
import SIZES from "../../../shared/constants/sizes";

const OUTLINED = StyleSheet.create({
	tag: {
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
		color: COLORS.WHITE
	},
	image: {}
});

const BACKGROUND = StyleSheet.create({
	tag: {
		borderRadius: 16,
		backgroundColor: COLORS.LIGHT_BLUE,
		paddingHorizontal: 15,
		paddingVertical: 5
	},
	name: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.MD,
		color: COLORS.WHITE
	},
	image: {}
});

const TEXT = StyleSheet.create({
	tag: {},
	name: {
		fontFamily: FONTS.PRIMARY,
		fontSize: SIZES.MD,
		color: COLORS.LIGHT_BLUE
	},
	image: {}
});

const TAG_THEMS = {
	OUTLINED,
	BACKGROUND,
	TEXT
};

export default TAG_THEMS;
