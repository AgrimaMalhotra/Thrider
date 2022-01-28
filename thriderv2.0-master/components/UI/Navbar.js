import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Logo from "../../assets/logo.png";
import { Searchbar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const Navbar = ({ navigation }) => {
  const [isSearch, setSearch] = useState(false);
  const [searchText, setText] = useState("");
  return (
    <View style={[styles.flex, styles.row, styles.header, styles.shadow]}>
      {isSearch && (
        <Animatable.View animation="slideInRight">
          <Searchbar
            placeholder="Search for gyms"
            style={{ flex: 1, width: width - 30 }}
            onChangeText={(text) => setText(text)}
            clearIcon={() => (
              <MaterialCommunityIcons
                name="close"
                size={24}
                color="black"
                onPress={() => {
                  setText("");
                  setSearch(false);
                }}
              />
            )}
          />
        </Animatable.View>
      )}
      {!isSearch && (
        <View>
          <Image source={Logo} style={styles.LogoStyle}></Image>
        </View>
      )}
      {!isSearch && (
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="search"
            size={22}
            color="black"
            style={{ marginTop: 8, marginRight: 10 }}
            onPress={() => setSearch(true)}
          />
          <Entypo
            name="menu"
            size={40}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        </View>
      )}
    </View>
  );
};

export default Navbar;

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
  header: {
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    height: height * 0.12,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 8,
  },
  LogoStyle: {
    height: height * 0.06,
    width: width * 0.13,
    marginLeft: 5,
  },
});
