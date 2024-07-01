import FontAwesome6Icon from "@expo/vector-icons/FontAwesome6";
import type { FC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

interface IconProps {
	name: string;
	size: number;
	color: string;
}

const Icon: FC<IconProps> = (props) => {
	const { name, size, color } = props;

	return <FontAwesome6Icon name={name} size={size} color={color} style={styles.icon}></FontAwesome6Icon>;
};

const styles = StyleSheet.create({
	icon: {}
});

export default Icon;
