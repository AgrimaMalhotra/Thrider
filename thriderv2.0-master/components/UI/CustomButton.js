import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import image from "../../assets/Otp/get.png";

const { width, height } = Dimensions.get("window");

const CustomButton = ({ text, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.img} source={image}>
        <Text style={{ color: "#fff", fontSize: 18 }}>{text}</Text>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  img: {
    width: 0.35 * width,
    borderRadius: 20,
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
    flexDirection: "row",
  },
});
