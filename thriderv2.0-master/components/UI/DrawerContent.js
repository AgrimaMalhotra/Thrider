import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  useTheme,
  ActivityIndicator,
} from "react-native-paper";

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { AuthContext } from "../../components/Context/AuthContext";
import { MY_PROFILE } from "../../graphql/requests";
import Reactotron from "reactotron-react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = (props) => {
  const paperTheme = useTheme();
  const [image, setImage] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
  );
  const { signOutTrivial, signOutGoogle } = useContext(AuthContext);

  let isGoogle;
  useEffect(() => {
    (async () => {
      try {
        const image = await AsyncStorage.getItem("user_image");
        if (image) {
          setImage(image);
        }
      } catch (err) {
        console.log(err);
      }
    })();
    (async () => {
      try {
        const data = await AsyncStorage.getItem("is_google");
        if (data) {
          isGoogle = data;
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [image]);

  return (
    <View style={{ flex: 1 }}>
      {/* <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: image,
                }}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{user && user.me.name}</Title>
                <Caption style={styles.caption}>
                  {user && user.me.email}
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color="#FB5B21" size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate("Landing")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color="#FB5B21" size={size} />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate("Profile")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color="#FB5B21" size={size} />
              )}
              label="Bookings"
              onPress={() => props.navigation.navigate("Booking")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar" color="#FB5B21" size={size} />
              )}
              label="Attendance"
              onPress={() => props.navigation.navigate("Attendance")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="wallet" color="#FB5B21" size={size} />
              )}
              label="Past Orders"
              onPress={() => props.navigation.navigate("PastOrder")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="heart" color="#FB5B21" size={size} />
              )}
              label="Wish list"
              onPress={() => props.navigation.navigate("Wishlist")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="dumbbell" color="#FB5B21" size={size} />
              )}
              label="Fitness Guide"
              onPress={() => props.navigation.navigate("Fitness")}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences" style={{ marginTop: 30 }}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={async () => {
            if (isGoogle === "true") {
              console.log("google");
              await signOutGoogle();
              signOutTrivial();
            } else {
              signOutTrivial();
            }
          }}
          //onPress={() => console.log(isGoogle === "true" ? "google" : "non")}
        />
      </Drawer.Section> */}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 10,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 50,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
