import { createContext } from "react";

import type { AuthTokensDto, UserEntity } from "../../../graphql";
import type { LoginMutationFn, MeMutationFn, RefreshTokensMutationFn, VerifyCodeMutationFn } from "../gql/auth.gql";

export interface AuthContextProps {
	authTokens?: AuthTokensDto;
	user?: UserEntity | null;
	isLoading: boolean;
	isInit: boolean;
	error: Error | null;
	logout: () => Promise<void>;
	me: MeMutationFn;
	login: LoginMutationFn;
	verifyCode: VerifyCodeMutationFn;
	refreshToken: RefreshTokensMutationFn;
}

const AuthContext = createContext<AuthContextProps>({
	authTokens: undefined,
	user: null,
	isLoading: false,
	isInit: false,
	error: null,
	logout: async () => {},
	login: (() => {}) as any,
	me: (() => {}) as any,
	verifyCode: (() => {}) as any,
	refreshToken: (() => {}) as any
});

export default AuthContext;
