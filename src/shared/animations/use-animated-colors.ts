const useAnimatedColors = (_duration: number = 1500) =>
	// const progress = useSharedValue(0);
	//
	// const getCurrentColors = (value: number) => [
	// 	interpolateColor(value, [0, 0.5, 1], ["#FF7474", "#FFD08A", "#8B9CFF"]),
	// 	interpolateColor(value, [0, 0.5, 1], ["#FFD08A", "#8B9CFF", "#FF7474"]),
	// 	interpolateColor(value, [0, 0.5, 1], ["#8B9CFF", "#FF7474", "#FFD08A"])
	// ];
	//
	// const [colors, setColors] = useState(getCurrentColors(0));
	//
	// useEffect(() => {
	// 	progress.value = withRepeat(withTiming(1, { duration }), -1, true);
	// }, []);
	//
	// const updateColors = (value: number) => {
	// 	const colors = getCurrentColors(value);
	// 	setColors(colors);
	// };
	//
	// useAnimatedStyle(
	// 	() => ({
	// 		backgroundColor: runOnJS(updateColors)(progress.value)
	// 	}),
	// 	[]
	// );
	//
	// return colors;

	[];
export default useAnimatedColors;
