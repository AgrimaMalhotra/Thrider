import * as React from "react";
import { List } from "react-native-paper";
import { View, Dimensions, Text, ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");
const CompareList = ({ title }) => {
  return (
    <List.Section>
      <List.Accordion
        title={title}
        style={{ backgroundColor: "#2193B0", marginBottom: -10 }}
        titleStyle={{
          color: "white",
        }}
      >
        <ScrollView
          horizontal
          style={{
            backgroundColor: "#2193B0",
            paddingLeft: -width * 0.28,
            paddingBottom: 10,
          }}
          indicatorStyle="white"
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: width,
              height: 200,
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            <Text>Gym A description</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: width,
              backgroundColor: "white",
              marginLeft: 20,
              borderRadius: 50,
            }}
          >
            <Text>Gym B description</Text>
          </View>
        </ScrollView>
      </List.Accordion>
    </List.Section>
  );
};

export default CompareList;
