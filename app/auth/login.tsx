import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

import type { LoginMutationVariables } from "../../src/auth/gql/auth.gql";
import useAuth from "../../src/auth/hooks/use-auth";
import Button from "../../src/shared/components/button";
import Tel from "../../src/shared/components/tel";
import Text from "../../src/shared/components/text";
import COLORS from "../../src/shared/constants/colors";

const Login: React.FC = () => {
	const router = useRouter();
	const { login } = useAuth();

	const {
		control,
		formState: { errors },
		getValues
	} = useForm<LoginMutationVariables["body"]>();

	const onPress = async () => {
		await login({ variables: { body: getValues() } });
		router.push("/auth/verify-code");
	};

	return (
		<View style={styles.container}>
			<Tel control={control} errors={errors} />
			<Button buttonStyle={styles.button} onPress={onPress}>
				<Text>Получить СМС</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30
	},
	tel: {},
	button: {
		borderRadius: 15,
		padding: 15,
		backgroundColor: COLORS.PRIMARY,
		marginTop: 30
	}
});

export default Login;
