import type { FC } from "react";
import type { SvgProps } from "react-native-svg";

import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Google from "../../../assets/icons/google.svg";
import Search from "../../../assets/icons/search.svg";

const iconComponents = {
	ArrowLeft,
	Facebook,
	Google,
	Search
} as const;

const Icons = iconComponents as Record<keyof typeof iconComponents, FC<SvgProps>>;

export default Icons;
