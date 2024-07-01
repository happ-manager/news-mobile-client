import { Image } from "expo-image";
import { useRouter } from "expo-router";
import type { FC } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";

import useAuth from "../../src/auth/hooks/use-auth";
import Button from "../../src/shared/components/button/button";
import BUTTON_THEMES from "../../src/shared/components/button/button-themes";
import Divider from "../../src/shared/components/divider";
import Input from "../../src/shared/components/input";
import Text from "../../src/shared/components/text/text";
import TEXT_THEMES from "../../src/shared/components/text/text-themes";
import COLORS from "../../src/shared/constants/colors";
import Icons from "../../src/shared/constants/icons";
import MASKS from "../../src/shared/constants/masks";
import ROUTES from "../../src/shared/constants/routes";

const Login: FC = () => {
	const router = useRouter();
	const { login } = useAuth();

	const {
		control,
		formState: { errors },
		getValues
	} = useForm<{ tel: string }>();

	const onPress = async () => {
		await login({ variables: getValues() });
		router.push(ROUTES.VERIFY_CODE);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Image source={require("../../assets/images/logo.png")} contentFit={"contain"} style={styles.logo} />

				<View style={styles.form}>
					<Controller
						name="tel"
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								label="Телефон"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								error={errors.tel && errors.tel.message}
								mask={MASKS.UKRAINE_TEL}
								textContentType="telephoneNumber"
								keyboardType="phone-pad"
								placeholder="Введите ваш телефон"
							/>
						)}
					/>

					<View style={styles.links}>
						<Text theme={TEXT_THEMES.SECONDARY}>Запомнить меня?</Text>
						<Text theme={TEXT_THEMES.HIGHLIGHTED}>Забыли пароль?</Text>
					</View>

					<Button theme={BUTTON_THEMES.BLACK} onPress={onPress} text="Получить СМС"></Button>

					<Divider>Или</Divider>

					<View style={styles.socialNetworks}>
						<Button
							buttonStyle={styles.socialNetwork}
							theme={BUTTON_THEMES.OUTLINED}
							onPress={onPress}
							text="Google"
							IconComponent={Icons.Google}
						></Button>

						<Button
							buttonStyle={styles.socialNetwork}
							theme={BUTTON_THEMES.OUTLINED}
							onPress={onPress}
							text="Facebook"
							IconComponent={Icons.Facebook}
						></Button>
					</View>

					<Text textStyle={styles.dontHaveAccount}>
						Еще нет аккаунта? <Text theme={TEXT_THEMES.HIGHLIGHTED_TEXT}>Создать</Text>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: COLORS.WHITE
	},
	container: {
		paddingHorizontal: 20,
		paddingVertical: 40
	},
	logo: {
		width: 140,
		height: 180,
		alignSelf: "center"
	},
	form: {
		marginTop: 40
	},
	links: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15
	},
	socialNetworks: {
		flexDirection: "row",
		columnGap: 16,
		marginTop: 24
	},
	socialNetwork: {
		flex: 1
	},
	dontHaveAccount: {
		...TEXT_THEMES.SECONDARY.text,
		alignSelf: "center",
		marginTop: 87
	}
});

export default Login;
