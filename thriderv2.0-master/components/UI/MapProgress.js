import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import StepIndicator from "react-native-step-indicator";

const { width, height } = Dimensions.get("window");

const labels = [
  "Packed",
  "Shipped",
  "Out for delivery",
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#4daf4d",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#4daf4d",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#4daf4d",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#4daf4d",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#4daf4d",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#4daf4d",
};
const Label = (item) => {
  console.log(item);
  switch(item.position)
  {
    case 0: return(
              <View style={{width: 200}}>
                <Text style={styles.LabelTextHead}>{item.label}</Text>
                  <Text style={styles.LabelTextDetails}>23/11/2020</Text>
                  <Text style={styles.LabelTextDetails}>Jalandhar,IN</Text>
              </View>
    )
    case 1: return(
              <View style={{width: 200}}>
                <Text style={styles.LabelTextHead}>{item.label}</Text>
                <Text style={styles.LabelTextDetails}>23/11/2020</Text>
                <Text style={styles.LabelTextDetails}>Jalandhar,IN</Text>
                <Text style={styles.LabelTextDetails}>Order Id: 6969696969</Text>
              </View>
)
    case 2: return(
              <View style={{width: 200}}>
                <Text style={styles.LabelTextHead}>{item.label}</Text>
                <Text style={styles.LabelTextDetails}>23/11/2020</Text>
                <Text style={styles.LabelTextDetails}>Jalandhar,IN</Text>
                <Text style={styles.LabelTextDetails}>Contact Details: 6969696969</Text>
              </View>
)
  }
}

export default function App() {
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <View>
      <View style={styles.indicatorContainer}>
        <StepIndicator
          direction="vertical"
          customStyles={customStyles}
          currentPosition={currentPosition}
          stepCount = '3'
          labels={labels}
          renderLabel={Label}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: 'absolute',
          bottom: 90,
          right: 20
        }}
      >
        <Button
          title="Next"
          onPress={() => {
            setCurrentPosition((state) => state + 1);
          }}
        />
        <Button title="Back" 
        onPress={() => {
            setCurrentPosition((state) => state - 1);
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  indicatorContainer: {
    height: height * 0.3,
    width: width * 0.1,
    borderRadius: 20,
  },
  LabelTextHead:{
    color: 'black', 
    marginTop:18
  },
  LabelTextDetails:{
    opacity: 0.5,
    color: 'black',
    fontSize: 9
  },
});
