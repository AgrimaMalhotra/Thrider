import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import AutoAuthScreen from "../../screens/Auth/AutoAuth";
import CarouselScreen from "../../screens/LandingCarouselScreen";
import AuthScreen from "../../screens/AuthScreen";
import SignInEmail from "../../screens/Auth/SignIn/SignInEmail";
import SignUpMain from "../../screens/Auth/SignUp/SignUpMain";
import SignUpDetails from "../../screens/Auth/SignUp/SignUpDetails";
import DriverScreen from "../../screens/DriverScreen";
import MapScreen from "../../screens/MapScreen";
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AutoAuth"
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="AutoAuth" component={AutoAuthScreen} />
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="SignUpMain" component={SignUpMain} />
      <Stack.Screen name="Details" component={SignUpDetails} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="SignInEmail" component={SignInEmail} />
      <Stack.Screen name="driver" component={DriverScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
