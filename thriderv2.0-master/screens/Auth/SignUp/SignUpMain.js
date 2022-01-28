import React, { useState, useContext } from "react";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import fb from '../../../firebase';
import 'firebase/firestore';
import { registration } from '../../../api/methods'
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
  TouchableWithoutFeedback,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Text as GText, Icon } from "galio-framework";
import Button from "../../../components/UI/CustomButton";

import { FontAwesome } from "@expo/vector-icons";

import mobile from "../../../assets/Otp/mobile.png";


import { AuthContext } from "../../../components/Context/AuthContext";

const { width, height } = Dimensions.get("window");
const db=fb.firestore()
const LoginScreen = ({ navigation, route }) => {
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

  const [isFirstClick, setClick] = useState(false);
  const [behav, setBehav] = useState("padding");
  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [name, setName] = useState(null);
  let token, uuid;

  const createUser = async () => {
  try{
   const a= await registration(
      email,
      password,
    )
    
  }
  catch(e){
console.log(e)
  }
  navigation.navigate("Details", {
    firstName: firstName,
    lastName: lastName,
  });
  };

  return (
    <KeyboardAvoidingView
      behavior={behav}
      keyboardVerticalOffset={height * 0.05}
      style={styles.topContainer}
    >
      <Image
        source={mobile}
        style={{ width: width * 0.6, height: width * 0.6, marginLeft: 10 }}
      />
      <View style={{ alignItems: "center" }}>
          <>
            <View style={[styles.flex, styles.inputContainer]}>
              <GText muted>Enter your Email ID</GText>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={[styles.textInput, styles.shadow]}
              />
            </View>
            <View style={[styles.flex, styles.inputContainer]}>
              <GText muted>Enter your password</GText>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={[styles.textInput, styles.shadow]}
                secureTextEntry={true}
              />
            </View>

            <View style={{ flex: 0 }}>
              <Button text="Next" onPress={createUser}>
              </Button>
            </View>
          </>
      </View>
  
    </KeyboardAvoidingView>
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
    left: 0,
    right: 0,
  },
});
