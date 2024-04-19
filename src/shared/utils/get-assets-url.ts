import ENV from "../constants/env";

const getAssetsUrl = (key?: string | null, type: "images" | "icons" = "images") =>
	key ? `${ENV.ASSETS_URL}/${type}/${key}` : "";

export default getAssetsUrl;
