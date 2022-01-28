import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../components/Context/AuthContext";
import logo from "../../assets/logo.png";

const AutoAuth = ({ navigation }) => {
  const { signInTrivial } = useContext(AuthContext);
  const autoAuth = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      const driver = await AsyncStorage.getItem("@driver");
      console.log(value)
      if (value){
        console.log("hello",driver)
        driver==="1"?navigation.navigate("driver"):signInTrivial();
      } else {
        navigation.navigate("Carousel");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    autoAuth();
  }, []);
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        resizeMode="stretch"
        source={logo}
        style={styles.image}
      />
    </View>
  );
};

export default AutoAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 50,
  },
});
