import React from "react";
import { StyleSheet, View } from "react-native";

import COLORS from "../constants/colors";
import FONTS from "../constants/fonts";
import SIZES from "../constants/sizes";
import Text from "./text/text";

const Header = () => (
	<View style={styles.header}>
		<View style={styles.avatar}></View>
		<View style={styles.info}>
			<Text fontFamily={FONTS.PRIMARY_BOLD} fontSize={SIZES.LG} color={COLORS.WHITE}>
				Good Morning 👋
			</Text>
			<Text fontFamily={FONTS.PRIMARY} fontSize={SIZES.MD} color={COLORS.WHITE}>
				Hanna Workman
			</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		columnGap: 12,
		alignItems: "center",
		justifyContent: "space-between"
	},
	avatar: {
		width: 42,
		height: 42,
		backgroundColor: "white",
		borderRadius: 50
	},
	info: {
		rowGap: 7,
		flex: 1,
		justifyContent: "center"
	},
	search: {}
});

export default Header;
