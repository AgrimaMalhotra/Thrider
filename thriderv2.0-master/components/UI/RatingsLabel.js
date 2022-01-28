import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const RatingsLabel = ({ rating, style }) => {
  return (
    <View style={[styles.ratingView, { ...style }]}>
      <Text style={{ fontSize: 10 }}>{rating}</Text>
      <FontAwesome
        name="star"
        size={10}
        color="white"
        style={{ marginLeft: 3 }}
      />
    </View>
  );
};

export default RatingsLabel;

const styles = StyleSheet.create({
  ratingView: {
    backgroundColor: "#00B01C",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    padding: 3,
  },
});
