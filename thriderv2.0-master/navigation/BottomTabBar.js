import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// Screens

// import WalletScreen from "../screens/WalletScreens";
// import ShopScreen from "../screens/ShopScreen";
// Tab Component
import TabComponent from "../components/UI/Tab";
import StackNav from "./Stack/StackNavigator";
import Track from '../screens/Track'
const BottomTabBar = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{
          tabBarButton: (props) => <TabComponent label="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          tabBarButton: (props) => <TabComponent label="Track" {...props} />,
        }}
      />
      {/* <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarButton: (props) => <TabComponent label="Wallet" {...props} />,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarButton: (props) => <TabComponent label="Shop" {...props} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabBar;
