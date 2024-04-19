import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ReactNode } from "react";
import { useEffect } from "react";
import React, { useState } from "react";

import type { AccessToken, UserEntity } from "../../../graphql";
import AuthContext from "../contextes/auth.context";
import { useLoginMutation, useVerifyCodeMutation } from "../gql/auth.gql";

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
	const [user, setUser] = useState<UserEntity | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!accessToken) {}

		// setUser(jwtDecode(accessToken));
	}, [accessToken]);

	const [loginMutation, loginState] = useLoginMutation({
		onCompleted: async (data) => {
			await saveTokens(data.login);
		},
		onError: (err) => setError(err)
	});

	const [verifyCodeMutation, verifyCodeState] = useVerifyCodeMutation({
		onCompleted: async (data) => {
			await saveTokens(data.verifyCode);
		},
		onError: (err) => {
			setError(err);
		}
	});

	const saveTokens = async (data: AccessToken) => {
		setAccessToken(data.accessToken);

		try {
			await Promise.all([
				AsyncStorage.setItem("accessToken", data.accessToken)
				// AsyncStorage.setItem("refreshToken", data.refreshToken),
				// AsyncStorage.setItem("expiresIn", data.expiresIn.toString())
			]);
		} catch (error) {
			console.error("Error saving data to AsyncStorage", error);
		}
	};

	const logout = async () => {
		await Promise.all([
			AsyncStorage.removeItem("accessToken")
			// AsyncStorage.removeItem("refreshToken"),
			// AsyncStorage.removeItem("expiresIn")
		]);
		setUser(null);
	};

	const isLoading = loginState.loading || verifyCodeState.loading;

	return (
		<AuthContext.Provider
			value={{ accessToken, user, isLoading, error, login: loginMutation, verifyCode: verifyCodeMutation, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
