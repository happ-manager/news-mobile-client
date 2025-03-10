import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "./text/text";

const Header = () => (
	<View style={styles.header}>
		<View style={styles.avatar}></View>
		<View style={styles.info}>
			<Text style={styles.hello}>Good Morning 👋</Text>
			<Text style={styles.name}>Hanna Workman</Text>
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
	search: {},
	hello: {},
	name: {}
});

export default Header;
