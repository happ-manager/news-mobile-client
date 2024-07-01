import type { FC, PropsWithChildren } from "react";
import React, { useState } from "react";

import ConfigContext from "../contextes/config.context";

const ConfigProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDark, setIsDark] = useState(true);

	return <ConfigContext.Provider value={{ isDark, setIsDark }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
