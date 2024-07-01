import { createContext } from "react";

interface ConfigContextProps {
	isDark: boolean;
	setIsDark: (value: boolean) => void;
}

const ConfigContext = createContext<ConfigContextProps>({
	isDark: false,
	setIsDark: () => {}
});

export default ConfigContext;
