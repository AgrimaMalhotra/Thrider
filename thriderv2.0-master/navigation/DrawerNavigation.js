import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screen
// import ProfileScreen from "../screens/ProfileScreen";
// import AttendanceScreen from "../screens/AttendanceScreen";
// import PastOrderScreen from "../screens/Shop/PastOrdersScreen";
// import WishListScreen from "../screens/Shop/SubOptions/AllItems";
// import FitnessGuideScreen from "../screens/CatalogueScreen";
// import BookingScreen from "../screens/BookingScreen";
// import Landing from "../screens/Landing";
// import ProfileScreen from "../screens/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

import BottomTab from "./BottomTabBar";
import DrawerContent from "../components/UI/DrawerContent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        zIndex: 1000,
      }}
      drawerType={width >= 768 ? "permanent" : "front"}
      drawerPosition="right"
      initialRouteName="BottomTab"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-home" size={24} color="#FB5B21" />
          ),
          title: "Home",
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-person" size={24} color="#FB5B21" />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="playlist-check"
              size={24}
              color="#FB5B21"
            />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          drawerIcon: () => (
            <Feather name="calendar" size={24} color="#FB5B21" />
          ),
        }}
      />
      <Drawer.Screen
        name="PastOrder"
        component={PastOrderScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color="#FB5B21"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          drawerIcon: () => (
            <AntDesign name="heart" size={24} color="#FB5B21" />
          ),
        }}
      />
      <Drawer.Screen
        name="Fitness"
        component={FitnessGuideScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-fitness" size={24} color="#FB5B21" />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
