import { createContext } from "react";

interface AppContextProps {
	offsetY: number;
	isDark: boolean;
	setOffsetY: (value: number) => void;
	setIsDark: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps>({
	offsetY: 0,
	isDark: false,
	setOffsetY: () => {},
	setIsDark: () => {}
});

export default AppContext;
