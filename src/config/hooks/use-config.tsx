import { useContext } from "react";

import ConfigContext from "../contextes/config.context";

const useConfig = () => useContext(ConfigContext);

export default useConfig;
