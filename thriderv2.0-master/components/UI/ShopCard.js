import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ShopColors from "../../constants/ShopColors";
const { width, height } = Dimensions.get("window");
import Forest from "../../assets/forest.jpg";
// const [index, setIndex] = useState('0');
import { IMAGE_URL } from "../../config/index";
// console.log(colors[B[index]]);
const ShopCard = ({ index, image }) => {
  return (
    <View style={styles.MainView}>
      <View style={[styles.ViewStyle, { backgroundColor: ShopColors[index] }]}>
        <Image
          source={{
            uri: IMAGE_URL + image,
          }}
          style={styles.Pic}
        />
        <View style={styles.WhiteCircle}></View>
      </View>
      <TouchableOpacity
        style={[styles.FavStyle, { backgroundColor: ShopColors[index] }]}
      >
        <AntDesign
          name="hearto"
          size={24}
          color="white"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  MainView: {
    width: "100%",
    backgroundColor: "white",
  },
  ViewStyle: {
    // backgroundColor: colors[B[index]],
    height: 200,
    width: "90%",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 5,
  },
  FavStyle: {
    position: "absolute",
    left: 135,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#F40075",
    alignItems: "center",
    justifyContent: "center",
  },
  WhiteCircle: {
    position: "absolute",
    left: 125,
    bottom: 165,
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  Pic: {
    height: 200,
    width: "100%",
    borderRadius: 30,
    // marginTop: 10,
    // marginLeft: 5,
  },
});
