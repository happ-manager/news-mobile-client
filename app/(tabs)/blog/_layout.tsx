import { Stack } from "expo-router";
import * as React from "react";

const Blog = () => (
	<Stack screenOptions={{ headerShown: false }}>
		<Stack.Screen name="articles" />
		<Stack.Screen name="article" />
	</Stack>
);

export default Blog;
