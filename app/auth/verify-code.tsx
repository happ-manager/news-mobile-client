import { Image } from "expo-image";
import { useRouter } from "expo-router";
import type { FC } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";

import useAuth from "../../src/auth/hooks/use-auth";
import Button from "../../src/shared/components/button/button";
import BUTTON_THEMES from "../../src/shared/components/button/button-themes";
import CodeInput from "../../src/shared/components/code-input";
import Text from "../../src/shared/components/text/text";
import TEXT_THEMES from "../../src/shared/components/text/text-themes";
import COLORS from "../../src/shared/constants/colors";
import FONTS from "../../src/shared/constants/fonts";
import ROUTES from "../../src/shared/constants/routes";
import SIZES from "../../src/shared/constants/sizes";

const VerifyCode: FC = () => {
	const router = useRouter();
	const { verifyCode } = useAuth();

	const { control, getValues } = useForm<{ verificationCode: string }>();

	const onPress = async () => {
		await verifyCode({ variables: getValues() });

		router.push(ROUTES.ARTICLES);
	};

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Image source={require("../../assets/images/logo.png")} contentFit={"contain"} style={styles.logo} />

				<View style={styles.text}>
					<Text textStyle={styles.verificationCode}>Код верификации</Text>
					<Text theme={TEXT_THEMES.SECONDARY}>
						Пожалуйста введите код который мы отправили на
						<Text theme={TEXT_THEMES.HIGHLIGHTED}> +38 099 748 98 45</Text>
					</Text>
				</View>

				<Controller
					name="verificationCode"
					control={control}
					render={({ field: { onChange, value } }) => <CodeInput value={value} onChange={onChange} />}
				/>

				<View style={styles.form}>
					<Button theme={BUTTON_THEMES.BLACK} onPress={onPress} text="Отправить код"></Button>

					<Text style={styles.dontReceivedCode}>
						Не получили код? <Text theme={TEXT_THEMES.HIGHLIGHTED}>Отправить повторно</Text>
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
		paddingVertical: 40,
		alignItems: "center"
	},
	form: {
		width: "100%",
		marginTop: 40
	},
	logo: {
		width: 140,
		height: 180
	},
	dontReceivedCode: {
		...TEXT_THEMES.SECONDARY.text,
		textAlign: "center",
		marginTop: 24
	},
	text: {
		alignItems: "center",
		rowGap: 8,
		marginTop: 60
	},
	verificationCode: {
		color: COLORS.GREY2,
		fontFamily: FONTS.PRIMARY_BOLD,
		fontSize: SIZES.MD
	}
});

export default VerifyCode;
