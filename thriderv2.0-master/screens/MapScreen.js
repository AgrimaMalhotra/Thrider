import React from 'react'
import {useState,useEffect} from 'react'
import { View, Text ,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,FlatList,LoadingIndicator,Modal,TextInput} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import * as expoLocation from 'expo-location'; 
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {finish} from '../api/methods'
const MapScreen = (props) => {
    // console.log(props.route.params.userDet)
    const [pickCoord,setPickCoord] = useState(null)
    const [dropCoord,setDropCoord] = useState(null)

    const finishJob = async () =>
    {
        let k = props.route.params.userDet.d2d
        let uuid = props.route.params.userDet.uid
      await finish(uuid,k)
        props.navigation.navigate('driver')
      }
    useEffect(() => {
     let pick,drop
      console.log("asss")
    const loc = async ()=>{
      let { status } = await expoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      console.log("func")
      try{
         pick = await expoLocation.geocodeAsync(props.route.params.userDet.pick+' Thapar Institute Of Engineering and Technology, Patiala')
    drop= await expoLocation.geocodeAsync(props.route.params.userDet.drop+' Thapar Institute Of Engineering and Technology, Patiala')
        setPickCoord(pick)
        setDropCoord(drop)
  
  }
      catch (e) {
        console.log(e.message)
      }
    
      console.log(pickCoord)
      console.log(dropCoord)
  }  
  loc()
    },[])
    return (
        <View>
              <LinearGradient colors={["#FFBE9D", "#E01790"]}>
         <TouchableOpacity onPress={()=>{finishJob()}}>  
          
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingHorizontal: 35,
                paddingTop:40,
                height: 80,
                
              }}
            >
              <Text
                style={{
                  textAlignVertical: "center",
                  // marginRight: 5,
                  fontSize: 17,
                  color: "#fff",
                }}
              >
                Finish Job
              </Text>
            </View>
            </TouchableOpacity>  
            
          </LinearGradient>
          <View style={styles.container}>
      <MapView region={{latitude:30.354462,longitude: 76.366281, latitudeDelta: 0.0221,
      longitudeDelta: 0.0321,}} style={styles.map} >
        {pickCoord && dropCoord &&<>
          <Marker
      key={0}
      coordinate={{latitude:pickCoord[0].latitude,longitude:pickCoord[0].longitude}}
     
    />
    <Marker
      key={1}
      coordinate={{latitude:dropCoord[0].latitude,longitude:dropCoord[0].longitude}}
      
    /></>}
      </MapView>
    </View>

        </View>
    )
}

export default MapScreen
const styles = StyleSheet.create({
  container: {
    // flex:0.7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.6,
  },
});