import RNIcon from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet } from "react-native";

interface IconProps {
	name: string;
	size: number;
	color: string;
}

const Icon: React.FC<IconProps> = (props) => {
	const { name, size, color } = props;

	return <RNIcon name={name} size={size} color={color} style={styles.icon}></RNIcon>;
};

const styles = StyleSheet.create({
	icon: {}
});

export default Icon;
