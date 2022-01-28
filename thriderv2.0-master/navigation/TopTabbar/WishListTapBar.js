import React from "react";
import { View, Text } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import AllItems from "../../screens/Shop/SubOptions/AllItems";
import StoreItems from "../../screens/Shop/SubOptions/StoreItems";
import FavGyms from "../../screens/Shop/SubOptions/FavGyms";

const Tab = createMaterialTopTabNavigator();

const WishListTapBar = () => {
  return (
    <Tab.Navigator swipeEnabled={false}>
      <Tab.Screen
        name="AllItems"
        component={AllItems}
        options={{
          title: "All Items",
        }}
      />
      <Tab.Screen
        name="StoreItems"
        component={StoreItems}
        options={{
          title: "Store Items",
        }}
      />
      <Tab.Screen
        name="FavGyms"
        component={FavGyms}
        options={{
          title: "Fav Gyms",
        }}
      />
    </Tab.Navigator>
  );
};

export default WishListTapBar;
