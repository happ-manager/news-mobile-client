import type { ReactNode } from "react";
import React from "react";
import { View } from "react-native";
import type { GestureHandlerStateChangeNativeEvent, TapGestureHandlerProps } from "react-native-gesture-handler";
import { State, TapGestureHandler } from "react-native-gesture-handler";

interface TappableProps extends TapGestureHandlerProps {
	children: ReactNode;
	onTap: () => void;
}

const Tappable: React.FC<TappableProps> = ({ children, onTap }) => {
	const handleTap = ({ nativeEvent }: { nativeEvent: GestureHandlerStateChangeNativeEvent }) => {
		if (nativeEvent.state === State.END) {
			onTap();
		}
	};

	return (
		<TapGestureHandler onHandlerStateChange={handleTap}>
			<View>{children}</View>
		</TapGestureHandler>
	);
};

export default Tappable;
