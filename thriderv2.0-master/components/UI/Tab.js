import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import Images from "../../assets/BottomTab/index";
import Colors from "../../constants/Color";

const Tab = ({ label, accessibilityState, onPress }) => {
  const focus = accessibilityState.selected;
  const icon = Images.icons[label.toLowerCase()];
  const iconSelect = Images.iconSelect[label.toLowerCase()];

  const color = Colors[label.toLowerCase()];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={300} />
      <Transition.In type="fade" durationMs={20} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}
    >
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={[
          styles.container,
          {
            backgroundColor: focus ? color : "white",
            borderRadius: 30,
            margin: 6,
          },
        ]}
      >
        <Image source={focus ? iconSelect : icon} style={{ marginRight: 7,height:25,width:30 }} />
        {focus && <Text style={{ color: "white" }}>{label}</Text>}
      </Transitioning.View>
    </TouchableWithoutFeedback>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
