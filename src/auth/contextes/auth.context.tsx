import { createContext } from "react";

import type { UserEntity } from "../../../graphql";
import type { LoginMutationFn, VerifyCodeMutationFn } from "../gql/auth.gql";

interface AuthContextProps {
	accessToken?: string;
	user?: UserEntity | null;
	login: LoginMutationFn;
	verifyCode: VerifyCodeMutationFn;
	logout: () => void;
	isLoading: boolean;
	error: Error | null;
}

const AuthContext = createContext<AuthContextProps>({
	accessToken: "",
	user: null,
	login: (() => {}) as any,
	verifyCode: (() => {}) as any,
	logout: () => {},
	isLoading: false,
	error: null
});

export default AuthContext;
