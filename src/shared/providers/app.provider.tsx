import React, { type ReactNode, useState } from "react";
import type { TextProps as RNTextProps } from "react-native";

import AppContext from "../contextes/app.context";

interface AppProviderProps extends RNTextProps {
	children: ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [offsetY, setOffsetY] = useState<number>(0);
	const [isDark, setIsDark] = useState(true);

	return <AppContext.Provider value={{ offsetY, setOffsetY, isDark, setIsDark }}>{children}</AppContext.Provider>;
};

export default AppProvider;
