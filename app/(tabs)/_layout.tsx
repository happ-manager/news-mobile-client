import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import TABS from "../../src/shared/constants/tabs";

const TabsLayout = () => (
	<Tabs screenOptions={{ headerShown: false }}>
		{TABS.map((tab) => (
			<Tabs.Screen
				key={tab.name}
				name={tab.name}
				options={{
					title: tab.title,
					tabBarIcon: ({ color }) => <FontAwesome size={28} name={tab.icon} color={color} />
				}}
			/>
		))}
	</Tabs>
);

export default TabsLayout;
