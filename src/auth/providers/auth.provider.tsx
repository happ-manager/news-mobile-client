import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import React, { useState } from "react";

import type { AuthTokensDto, UserEntity } from "../../../graphql";
import type { AuthContextProps } from "../contextes/auth.context";
import AuthContext from "../contextes/auth.context";
import { useLoginMutation, useMeMutation, useRefreshTokensMutation, useVerifyCodeMutation } from "../gql/auth.gql";

type AuthProviderProps = PropsWithChildren & {
	setAuthContext: (authContext: AuthContextProps) => void;
};

const AuthProvider: FC<AuthProviderProps> = (props) => {
	const { children } = props;
	const [authTokens, setAuthTokens] = useState<AuthTokensDto | undefined>(undefined);
	const [user, setUser] = useState<UserEntity | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [isInit, setIsInit] = useState<boolean>(false);

	const [meMutation, meState] = useMeMutation({
		onCompleted: async (data) => {
			await saveTokens(data.me);
		},
		onError: async (err) => {
			console.error("Error during me", err);
			setError(err);
			// await logout();
		}
	});

	const [loginMutation, loginState] = useLoginMutation({
		onCompleted: async (data) => {
			await saveTokens(data.login);
		},
		onError: (err) => {
			console.error("Error during login", err);
			setError(err);
		}
	});

	const [verifyCodeMutation, verifyCodeState] = useVerifyCodeMutation({
		onCompleted: async (data) => {
			await saveTokens(data.verifyCode);
		},
		onError: (err) => {
			console.error("Error during verify code", err);
			setError(err);
		}
	});

	const [refreshTokenMutation] = useRefreshTokensMutation({
		onCompleted: async (data) => {
			await saveTokens(data.refreshTokens);
		},
		onError: async (err) => {
			console.error("Error during refresh tokens", err);
			setError(err);
		}
	});

	const saveTokens = async (data: AuthTokensDto) => {
		setAuthTokens(data);

		await Promise.all([
			AsyncStorage.setItem("accessToken", data.accessToken),
			AsyncStorage.setItem("refreshToken", data.refreshToken),
			AsyncStorage.setItem("expiresIn", data.expiresIn.toString())
		]);
	};

	const logout = async () => {
		await Promise.all([
			AsyncStorage.removeItem("accessToken"),
			AsyncStorage.removeItem("refreshToken"),
			AsyncStorage.removeItem("expiresIn")
		]);
		setAuthTokens(undefined);
		setUser(null);
		setError(null);
	};

	const isLoading = loginState.loading || verifyCodeState.loading || meState.loading;

	const authContext: AuthContextProps = {
		authTokens,
		user,
		isLoading,
		isInit,
		error,
		logout,
		me: meMutation,
		login: loginMutation,
		verifyCode: verifyCodeMutation,
		refreshToken: refreshTokenMutation
	};

	useEffect(() => {
		props.setAuthContext(authContext);

		if (!authTokens) {
			return;
		}

		setUser(jwtDecode(authTokens.accessToken));
	}, [authTokens]);

	useEffect(() => {
		const initializeAuth = async () => {
			const accessToken = await AsyncStorage.getItem("accessToken");
			const refreshToken = await AsyncStorage.getItem("refreshToken");
			const expiresIn = await AsyncStorage.getItem("expiresIn");

			if (!accessToken || !refreshToken || !expiresIn) {
				setIsInit(true);
				return;
			}

			await saveTokens({ accessToken, refreshToken, expiresIn: Number(expiresIn) });

			await meMutation();

			setIsInit(true);
		};

		initializeAuth().then();
	}, []);

	return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
