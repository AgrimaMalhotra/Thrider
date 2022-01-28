import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import back1 from "../assets/landcarousel/1.jpeg";
import back2 from "../assets/landcarousel/2.jpeg";
import back3 from "../assets/landcarousel/3.webp";
import { Button } from "galio-framework";

const { width, height } = Dimensions.get("window");

const LandingCarousel = ({ navigation }) => {
  navigation.setOptions({
    header: () => null,
  });
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPosition = useRef(new Animated.divide(scrollX, width * 3)).current;

  const renderdots = () => {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          position: "absolute",
          bottom: 36,
          right: 0,
          left: 0,
        }}
      >
        {[1, 1, 1].map((_, i) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={{flex: 1,height:height}}>
      <ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEnabled
          snapToAlignment="center"
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
        >
          <View style={{flex:1,width:width}}>
            <ImageBackground source={back1} style={{ flex: 0.5 }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 40,
                  top: height * 0.8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 25,
                    marginBottom: 10,
                    fontSize: 40,
                  }}
                >
                  <Text style={{ color: "#FB5B21" }}>THR</Text>IDER
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{flex:1,width:width}}>
            <ImageBackground source={back2} style={{ flex: 0.5}}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 40,
                  top: height * 0.75,
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: 30,
                  }}
                >
                  Thapar's First
                </Text>
                <Text
                  style={{ color: "#FB5B21", fontSize: 25, fontWeight: "bold" }}
                >
                  E-rickshaw app
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{flex:1,width:width}}>
            <ImageBackground source={back3} style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginHorizontal: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                  top: height * 0.32,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  
                </View>
                <Button
                  onlyIcon
                  icon="arrowright"
                  iconFamily="antdesign"
                  iconSize={30}
                  color="black"
                  iconColor="#fff"
                  style={{ width: 40, height: 40 }}
                  onPress={() => navigation.navigate("Auth")}
                >
                  warning
                </Button>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        {renderdots()}
    </View>
  );
};

export default LandingCarousel;

const styles = StyleSheet.create({
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2.5,
    marginHorizontal: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    backgroundColor: "white",
  },
});
