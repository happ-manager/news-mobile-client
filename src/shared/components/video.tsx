import { ResizeMode, Video as ExpoVideo } from "expo-av";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface VideoProps {
	videoUrl: string;
	imageUrl: string;
}

const Video: React.FC<VideoProps> = (props) => {
	const { videoUrl, imageUrl } = props;
	const [loading, setLoading] = useState(true);

	return (
		<View style={styles.container}>
			{loading && <Image style={styles.placeholder} contentFit={ResizeMode.COVER} source={imageUrl} />}
			<ExpoVideo
				source={{ uri: videoUrl }}
				style={styles.video}
				resizeMode={ResizeMode.CONTAIN}
				status={{ shouldPlay: true }}
				isLooping
				onLoadStart={() => setLoading(true)}
				onReadyForDisplay={() => setLoading(false)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 400,
		height: 950,
		position: "relative"
	},
	video: {
		position: "absolute",
		top: 0,
		left: 30,
		bottom: 0,
		right: 0
	},
	placeholder: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
		zIndex: 2
	}
});

export default Video;
