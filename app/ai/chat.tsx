import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput } from "react-native";

import GradientMessages from "../../src/shared/components/gradient-messages";

const Chat = () => (
	<KeyboardAvoidingView style={styles.chat} behavior={Platform.OS === "ios" ? "padding" : "height"}>
		<GradientMessages />

		<TextInput style={styles.input} />
	</KeyboardAvoidingView>
);

const styles = StyleSheet.create({
	chat: { flex: 1 },
	input: { height: 50, backgroundColor: "grey" }
});

export default Chat;
