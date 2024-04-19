import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

interface SwipeToDeleteListProps<T> {
	data: T[];
	renderItem: (data: { item: T; index: number }) => React.ReactNode;
	handleDelete: (item: T) => void;
}

function getItemsWithKeys<T>(data: T[]) {
	return data.map((item) => ({ item, key: Math.random().toString(36).slice(2, 11) }));
}

export function SwipeToDeleteList<T>(props: SwipeToDeleteListProps<T>) {
	const { data, renderItem, handleDelete } = props;
	const [listData, setListData] = useState(getItemsWithKeys(data));
	const rowTranslateAnimatedValues = useRef(new Map<string, Animated.Value>()).current;

	useEffect(() => {
		const items = getItemsWithKeys(data);

		setListData(items);

		for (const item of items) {
			rowTranslateAnimatedValues.set(item.key, new Animated.Value(1));
		}
	}, [data]);

	const onSwipeValueChange = (swipeData: { key: string; value: number }) => {
		const { key, value } = swipeData;

		if (value >= -Dimensions.get("window").width || !rowTranslateAnimatedValues.has(key)) {
			return;
		}

		const animationConfig = { toValue: 0, duration: 200, useNativeDriver: false };

		const onCompleteAnimation = () => {
			const deletedItem = listData.find((item) => item.key === key)?.item;

			if (!deletedItem) {
				return;
			}

			handleDelete(deletedItem);
		};

		Animated.timing(rowTranslateAnimatedValues.get(key)!, animationConfig).start(onCompleteAnimation);
	};

	const renderAnimatedItem = (rowData: { item: { item: T; key: string }; index: number }) => {
		const { item, index } = rowData;
		const animationStyle = {
			height: rowTranslateAnimatedValues.get(item.key)?.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 50]
			})
		};
		return (
			<Animated.View style={[styles.rowFrontContainer, animationStyle]}>
				{renderItem({ item: item.item, index })}
			</Animated.View>
		);
	};

	const renderHiddenItem = () => (
		<View style={styles.rowBack}>
			<View style={[styles.backRightBtn, styles.backRightBtnRight]}>
				<Text style={styles.backTextWhite}>Delete</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<SwipeListView
				disableRightSwipe
				data={listData}
				renderItem={renderAnimatedItem}
				renderHiddenItem={renderHiddenItem}
				rightOpenValue={-Dimensions.get("window").width}
				onSwipeValueChange={onSwipeValueChange}
				useNativeDriver={false}
				keyExtractor={(item) => item.key}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	rowFrontContainer: {
		alignItems: "center",
		backgroundColor: "#CCC",
		borderBottomColor: "black",
		borderBottomWidth: 1,
		justifyContent: "center"
	},
	rowBack: {
		alignItems: "center",
		backgroundColor: "red",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 15
	},
	backRightBtn: {
		alignItems: "center",
		bottom: 0,
		justifyContent: "center",
		position: "absolute",
		top: 0,
		width: 75
	},
	backRightBtnRight: {
		backgroundColor: "red",
		right: 0
	},
	backTextWhite: {
		color: "#FFF"
	}
});

export default SwipeToDeleteList;
