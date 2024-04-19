import { useContext } from "react";

import AppContext from "../contextes/app.context";

const useApp = () => useContext(AppContext);

export default useApp;
