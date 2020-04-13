import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const layoutWidth = 414;
const response = (px) => (px * deviceWidth) / layoutWidth;

export default response;
