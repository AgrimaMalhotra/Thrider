import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
} from "react-native";
import SignIn from "../components/Auth/signIn";
import SignUp from "../components/Auth/signup";
import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/Context/AuthContext";

import { Button, Icon } from "galio-framework";
import { Text as Gtext } from "galio-framework";
import modal from "../assets/Modal/modal.png";
import google from "../assets/Modal/google.png";
const { width, height } = Dimensions.get("window");
const AuthScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState(null);
  const { signInTrivial, signInGoogle } = useContext(AuthContext);
  let token;

  const [modalVisible, setModalVisible] = useState(false);
  navigation.setOptions({
    header: () => {
      return null;
    },
  });
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, styles.shadow]}>
            <Text style={{ fontSize: 25, fontWeight: "800", marginTop: 20 }}>
              Welcome Back
            </Text>
            <View>
              <Image
                source={modal}
                style={{ width: height * 0.25, height: height * 0.25 }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Button
               round
               color="black"
               style={{ width: 220, padding: 10 }}
                onPress={() => {
                  navigation.navigate("SignInEmail");
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white" }}>Login with Email ID</Text>
              </Button>
              
            </View>
            <View
              style={{
                marginTop: height * 0.1,
                flex: 1,
                width: "50%",
                alignItems: "center",
              }}
            >
              <Gtext muted style={{ marginBottom: 5 }}>
                Sign in using
              </Gtext>
              <View
                style={[
                  styles.flex,
                  styles.row,
                  { alignItems: "center", justifyContent: "space-between" },
                ]}
              >
                {Platform.OS === "ios" && (
                  <AppleAuthentication.AppleAuthenticationButton
                    name="apple"
                    buttonType={
                      AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP
                    }
                    family="font-awesome"
                    buttonStyle={
                      AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
                    }
                    color="black"
                    cornerRadius={5}
                    size={40}
                    style={{ width: 200, height: 44 }}
                    onPress={async () => {
                      try {
                        const credential = await AppleAuthentication.signInAsync(
                          {
                            requestedScopes: [
                              AppleAuthentication.AppleAuthenticationScope
                                .FULL_NAME,
                              AppleAuthentication.AppleAuthenticationScope
                                .EMAIL,
                            ],
                          }
                        );
                        console.log(credential);
                        setEmail(credential.email);

                     

                        // signed in
                      } catch (e) {
                        if (e.code === "ERR_CANCELED") {
                          // handle that the user canceled the sign-in flow
                        } else {
                          // handle other errors
                        }
                      }
                    }}
                  />
                )}
                <View style={styles.vertDivider} />
                <TouchableOpacity >
                  <Image source={google} style={{ height: 35, width: 35 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={[
          styles.topContainer,
          {
            backgroundColor: modalVisible ? "rgba(0,0,0,0.5)" : "white",
          },
        ]}
      >
        <View style={{ flex: 0, marginTop: height * 0.09 }}>
          <View
            style={[
              styles.column,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Image
              source={require("../assets/auth3.jpeg")}
              style={{ width: height * 0.4, height: height * 0.39 }}
            />
          </View>
          <View
            style={{ height: height * 0.08, alignItems: "center", top: 10 }}
          >
            <View style={([styles.flex, styles.row], { width: height * 0.5 })}>
              <Text style={styles.heading}>THRIDER</Text>
            </View>
            <View style={([styles.flex, styles.row], { width: height * 0.34 })}>
              <Text style={styles.text}>
                lorem ipsum lorem ipsum nshfibvfdsfow bsidhihvohnd lorem
              </Text>
            </View>
          </View>
          <View style={[styles.container, styles.column]}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <SignIn navigation={navigation} />
            </TouchableOpacity>
            <View style={styles.signUpPosition}>
              <TouchableOpacity>
                <SignUp navigation={navigation} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: width,
    height: height,
  },
  flex: {
    flex: 0,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  container: {
    justifyContent: "space-between",
    marginTop: height * 0.04,
  },
  signUpPosition: {
    position: "relative",
    top: height * 0.04,
    alignSelf: "flex-end",
  },
  heading: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    alignSelf: "center",
  },
  divider: {
    width: width * 0.2,
    backgroundColor: "black",
    height: 1,
    marginHorizontal: 7,
  },
  vertDivider: {
    width: 1,
    backgroundColor: "black",
    height: 35,
    marginHorizontal: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 35,
    alignItems: "center",
    width: width * 0.8,
    height: height * 0.8,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
