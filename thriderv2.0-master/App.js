import React, { useState, useEffect, useMemo, useReducer } from "react";
import {
  LogBox,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Navigatior from "./navigation/RootNavigator";
import AuthStack from "./navigation/Stack/AuthStackNavigator";

import { AuthContext } from "./components/Context/AuthContext";
import * as firebase from 'firebase';
import apiKeys from './config/index';
//import client from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";



const App = () => {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  const [isAuth, setAuth] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const authContext = useMemo(
    () => ({
      signInTrivial: () => {
        setAuth(true);
      },
      signOutTrivial: async () => {
        try {
          await AsyncStorage.clear();
        } catch (err) {
          console.log(err);
        }
        setAuth(false);
      },
      setUser: (user) => {
        setUserDetails(user);
      },
      getUser: () => {
        return {
          ...userDetails,
        };
      },
    }),
    [userDetails]
  );
  const [client, setClient] = useState(null);
  return (
    
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {isAuth ? <Navigatior /> : <AuthStack />}
        </NavigationContainer>
      </AuthContext.Provider>
  );
};

LogBox.ignoreAllLogs();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
