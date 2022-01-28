import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  return (
    <View>
      <View style={styles.signIn} onPress={() => setModalVisible(true)}>
        <View style={[styles.signInView]}>
          <Text style={[styles.signInTextHeading]}>SIGN IN</Text>
          <Text style={[styles.signInText]}>Welcome Back</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signIn: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#000",
    height: height * 0.12,
    width: width * 0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInView: {
    justifyContent: "center",
    alignItems: "center",
  },
  signInTextHeading: {
    color: "#fff",
    fontSize: 25
  },
  signInText: {
    color: "#fff",
    fontSize: 13,
    alignSelf:'center',
  },
});
export default SignIn;
