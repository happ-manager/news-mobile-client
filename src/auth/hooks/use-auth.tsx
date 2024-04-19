import { useContext } from "react";

import AuthContext from "../contextes/auth.context";

const useAuth = () => useContext(AuthContext);

export default useAuth;
