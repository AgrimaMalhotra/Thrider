import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity style={styles.signupStyle} onPress={()=>{navigation.navigate("SignUpMain")}}>
        <View style={styles.signupView}>
          <Text style={styles.signUpTextHeading}>SIGN UP</Text>
          <Text style={styles.signUpText}>NEW HERE?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signupStyle: {
    height: height * 0.12,
    width: width * 0.6,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#e9695a",
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupView: {
    justifyContent: "center",
  },
  signUpTextHeading: {
    color: "#fff",
    fontSize: 25,
  },
  signUpText: {
    color: "#fff",
    fontSize: 13,
    alignSelf:'center',
  },
});

export default SignUp;
