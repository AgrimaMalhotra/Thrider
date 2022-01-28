import React, { useEffect, useState, useContext } from "react";
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Dimensions,
 TouchableOpacity,
 ScrollView,
 ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { Text as GText } from "galio-framework";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../../components/UI/CustomButton";
const { width, height } = Dimensions.get("window");
import { RadioButton } from "react-native-paper";
import { AuthContext } from "../../../components/Context/AuthContext";
import { details } from "../../../api/methods";
const SignUpDetails = ({ navigation, route }) => {
 const { signInTrivial } = useContext(AuthContext);
 navigation.setOptions({
   header: () => {
     return (
       <View style={[styles.flex, styles.row, styles.header]}>
         <TouchableOpacity
           style={styles.back}
           onPress={() => {
             navigation.goBack();
           }}
         >
           <FontAwesome name={"long-arrow-left"} color="black" size={20} />
         </TouchableOpacity>
       </View>
     );
   },
   headerTransparent: true,
 });
  const [age, setAge] = useState("0");
 const [fname, setFname] = useState("");
 const [lname, setLname] = useState("");
 const [phone, setPhone] = useState("");
 const [driver, setDriver] = useState(0);
  const updateProfileAsync = async () => {
   try{
     const d=await details(
      fname,
       lname,
       age,
       phone,
       driver
     )
     if(!d){
      
      driver==="1"?navigation.navigate("driver"):signInTrivial();
    
     }
   }
   catch(e){
     console.log(e.message)
   }


 };
 return (
   <View style={styles.mainContainer}>
     <Text style={{ color: "#FB5B21", fontSize: 30 }}>
       FILL IN YOUR DETAILS
     </Text>
     <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
         alignItems: "center",
         marginTop: "10%",
         paddingVertical: height * 0.5,
       }}
     >
       <View style={[styles.flex, styles.inputContainer]}>
         <View style={{ flexDirection: "row", width: "100%" }}>
           <GText muted>Enter your First Name </GText>
         </View>
         <TextInput
           value={fname}
           onChangeText={(text) => setFname(text)}
           style={[styles.textInput, styles.shadow]}
         />
       </View>
       <View style={[styles.flex, styles.inputContainer]}>
         <View style={{ flexDirection: "row", width: "100%" }}>
           <GText muted>Enter your Last Number </GText>
         </View>
         <TextInput
           value={lname}
           onChangeText={(text) => setLname(text)}
           style={[styles.textInput, styles.shadow]}
         />
       </View>
       <View style={[styles.flex, styles.inputContainer]}>
         <View style={{ flexDirection: "row", width: "100%" }}>
           <GText muted>Enter your Phone Number </GText>
         </View>
         <TextInput
           value={phone}
           onChangeText={(text) => setPhone(text)}
           style={[styles.textInput, styles.shadow]}
         />
       </View>
       <View style={[styles.flex, styles.inputContainer]}>
         <GText muted>Age</GText>
         <TextInput
           value={age}
           onChangeText={(text) => setAge(text)}
           style={[styles.textInput, styles.shadow]}
         />
       </View>
       <View style={[styles.flex, styles.inputContainer]}>
         <GText muted>Register as </GText>
         <View style={{ flexDirection: "row" }}>
           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "center",
             }}
           >
             <Text>Driver</Text>
             <RadioButton
               value="Driver"
               status={driver === 1 ? "checked" : "unchecked"}
               onPress={() => setDriver(1)}
               color="#FB5B21"
             />
           </View>
           <View style={{ flexDirection: "row", alignItems: "center" }}>
             <Text>User</Text>
             <RadioButton
               value="User"
               status={driver === 0 ? "checked" : "unchecked"}
               onPress={() => setDriver(0)}
               color="#FB5B21"
             />
           </View>
         </View>
       </View>
     </ScrollView>
     <Button text="Continue" onPress={updateProfileAsync} />
   </View>
 );
};
 
export default SignUpDetails;
 
const styles = StyleSheet.create({
 flex: {
   flex: 0,
 },
 row: {
   flexDirection: "row",
 },
 mainContainer: {
   flex: 1,
   alignItems: "center",
   backgroundColor: "white",
   justifyContent: "center",
   padding: width * 0.05,
   marginTop: height * 0.07,
 },
 textInput: {
   height: height * 0.06,
   width: width * 0.7,
   fontSize: 20,
   borderRadius: 12,
   backgroundColor: "#fff",
   textAlign: "center",
   marginTop: 10,
   borderColor: "black",
 },
 shadow: {
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5,
 },
 inputContainer: {
   alignItems: "center",
   marginBottom: height * 0.03,
 },
 header: {
   paddingHorizontal: 36,
   paddingTop: 50,
   paddingBottom: 30,
   justifyContent: "space-between",
   alignItems: "center",
   top: 0,
   left: 0,
   right: 0,
 },
});
