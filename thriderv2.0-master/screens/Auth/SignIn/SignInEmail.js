import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
} from "react-native";

import { Text as GText, Icon } from "galio-framework";
import { signIn ,getData} from "../../../api/methods";
import Button from "../../../components/UI/CustomButton";

import { FontAwesome } from "@expo/vector-icons";

import pana from "../../../assets/Otp/pana.png";


import { AuthContext } from "../../../components/Context/AuthContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { signInTrivial } = useContext(AuthContext);
  navigation.setOptions({
    header: () => {
      return (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name={"long-arrow-left"} color="black" size={20} />
          </TouchableOpacity>
        </View>
      );
    },
    headerTransparent: true,
  });

  const logInAsync = async () => {
   const d=await signIn(
      email,
      password
    )
    if(!d){
      var driv=await getData()
     
      console.log(driv)
      if(driv.isdriver){
       await AsyncStorage.setItem('@driver',"1")
        navigation.navigate('driver')
      }
      else{
       await AsyncStorage.setItem('@driver',"0")
        signInTrivial();
      }


    }
  
  };

  const [behav, setBehav] = useState("position");
  return (
    <>
      <Image
        source={pana}
        style={{
          width: width * 0.6,
          height: width * 0.6,
          marginLeft: 10,
          marginBottom: "10%",
        }}
      />
      <View style={{ alignItems: "center" }}>
        <View style={[styles.flex, styles.inputContainer]}>
          <GText muted>Enter your Email ID</GText>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={[styles.textInput, styles.shadow]}
          />
        </View>
        <View style={[styles.flex, styles.inputContainer]}>
          <GText muted>Enter your password</GText>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={[styles.textInput, styles.shadow]}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 0 }}>
          <Button text="Login" onPress={logInAsync} />
          <View style={{ alignItems: "center" }}>
            <GText muted size={13}>
              Forgot the password?
            </GText>
            <GText color="black" size={12}>
              click here
            </GText>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

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
  textInput: {
    height: height * 0.06,
    width: width * 0.7,
    fontSize: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    textAlign: "center",
    marginTop: 10,
    borderColor: "black",
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
  topContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: width * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  divider: {
    width: width * 0.2,
    backgroundColor: "#ccc",
    height: 1,
    marginHorizontal: 7,
  },
  vertDivider: {
    width: 1,
    backgroundColor: "#ccc",
    height: 35,
    marginHorizontal: 15,
  },
  header: {
    paddingHorizontal: 36,
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
  },
  arrowStyle: {
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    margin: 19,
  },
});
