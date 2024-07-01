import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import useAuth from "../../../src/auth/hooks/use-auth";
import Back from "../../../src/shared/components/back";
import Input from "../../../src/shared/components/input";
import Text from "../../../src/shared/components/text/text";
import COLORS from "../../../src/shared/constants/colors";
import FONTS from "../../../src/shared/constants/fonts";
import MASKS from "../../../src/shared/constants/masks";
import SIZES from "../../../src/shared/constants/sizes";

const Settings = () => {
	const { logout } = useAuth();
	const router = useRouter();

	const {
		control,
		formState: { errors }
	} = useForm<{ email: string; name: string; tel: string }>();

	const onPress = async () => {
		await logout();
		router.push("");
	};

	return (
		<SafeAreaView style={styles.settings}>
			<View style={styles.container}>
				<Back />

				<Image source={require("../../../assets/images/tag.png")} contentFit={"cover"} style={styles.image} />

				<View style={styles.form}>
					<Controller
						name="email"
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								label="Почта"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								error={errors.email && errors.email.message}
								placeholder="Введите вашу почту"
							/>
						)}
					/>

					<Controller
						name="name"
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								label="Имя"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								error={errors.name && errors.name.message}
								placeholder="Введите ваше имя"
							/>
						)}
					/>

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
								placeholder="Введите ваш телефон"
							/>
						)}
					/>
				</View>

				<TouchableOpacity onPress={onPress}>
					<Text style={styles.logout}>Logout</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	settings: { flex: 1, backgroundColor: COLORS.WHITE },
	container: { padding: 20 },
	image: {
		width: 120,
		height: 120,
		borderRadius: 100,
		alignSelf: "center"
	},
	form: {
		marginTop: 25,
		rowGap: 15
	},
	logout: {
		fontFamily: FONTS.PRIMARY_BOLD,
		fontSize: SIZES.MD,
		color: COLORS.RED,
		alignSelf: "center",
		marginTop: 16
	}
});

export default Settings;
