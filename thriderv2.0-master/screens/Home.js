import React,{useState,useEffect,useContext} from 'react'
import { View, Text,TouchableOpacity,Dimensions,StyleSheet,Modal,TextInput, Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");
import { sendRide,sendDelivery,getData } from '../api/methods';
import { LinearGradient } from "expo-linear-gradient";
import { SingleFieldSubscriptionsRule } from 'graphql';
import { AuthContext } from "../components/Context/AuthContext";
const Home = () => {
    useEffect( () => {
        async function getuid(){
           var d=await getData()
           
           setStatus(d.isdriver)
       
        }
        getuid()
        console.log(driverstatus)
      },[]);

    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [quantity, setQuantity] = useState(null);
    const [pickup, setPickup] = useState(null);
    const [drop, setDrop] = useState(null);
    const [nameitem, setNameItem] = useState(null);
    const [driverstatus, setStatus] = useState(0);
    const { signOutTrivial } = useContext(AuthContext);
    const d2dAsync=async()=>{
        if(!await sendDelivery(
            pickup,
            drop,
            quantity,
            nameitem
        )){
            console.log('Created')
            setQuantity('')
            setDrop('')
            setPickup('')
            setNameItem('')
           
            setModal2Visible(false)
        }
        else{
            console.log('error')
        }

    }
    const bookRideAsync = async ()=>{
if(!await sendRide(
    pickup,
    drop,
    quantity
 )){
     console.log('Created')
     setQuantity('')
     setDrop('')
     setPickup('')

     setModalVisible(false)
 }
 else{
     console.log('error')
 }

    }
    return ( <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  Ride Details
              </Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      width: width * 0.7,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                      }}
                    >
                      Pickup Location
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={pickup}
                      onChangeText={(text) => setPickup(text)}
                    />

                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      width: width * 0.7,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                      }}
                    >
                      Drop Location
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={drop}
                      onChangeText={(text) => setDrop(text)}
                    />

                  </View>
                  <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginVertical: 5,
                    width: width * 0.7,
                    zIndex: -1,
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textAlignVertical: "center",
                    }}>Number of Pax</Text>
                    <TextInput
                      style={styles.InputStyle}
                      value={quantity}
                      onChangeText={(text) => setQuantity(text)}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.AddStyle}
                  onPress={() => {
                   bookRideAsync()
                  }}
                >
                  <Text style={{ color: "#fff" }}>Book!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setModal2Visible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18 }}
                >
                  D2D Details
              </Text>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      width: width * 0.7,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                      }}
                    >
                      Pickup Location
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={pickup}
                      onChangeText={(text) => setPickup(text)}
                    />

                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      width: width * 0.7,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                      }}
                    >
                      Drop Location
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={drop}
                      onChangeText={(text) => setDrop(text)}
                    />

                  </View>
                  <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginVertical: 5,
                    width: width * 0.7,
                    zIndex: -1,
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textAlignVertical: "center",
                    }}>Name of Item </Text>
                    <TextInput
                      style={styles.InputStyle}
                      value={nameitem}
                      onChangeText={(text) => setNameItem(text)}
                    />
                  </View>
                  <View style={{
                    flexDirection: "row", justifyContent: "space-between",
                    marginVertical: 5,
                  
                    width: width * 0.7,
                    zIndex: -1,
                  }}>
                    <Text style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textAlignVertical: "center",
                    }}>quantity of Item </Text>
                    <TextInput
                      style={styles.InputStyle}
                      value={quantity}
                      onChangeText={(text) => setQuantity(text)}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.AddStyle}
                  onPress={() => {
                    d2dAsync()
                  }}
                >
                  <Text style={{ color: "#fff" }}>Book!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1 }}>
          <LinearGradient colors={["#FFBE9D", "#E01790"]}>
         <TouchableOpacity onPress={()=>{signOutTrivial()}}>   
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
                Logout
              </Text>
            </View>
            </TouchableOpacity>  
          </LinearGradient>
  
          <View
            style={{
  
              justifyContent: "center",
              backgroundColor: "#fff",
              flex: 1,
  
            }}
          >
            <TouchableOpacity onPress={() => {
             setModal2Visible(true)
            }}>
              <View style={styles.imageView}>
  
               <Text style={{color:'white'}}>Book a D2D</Text>
  
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setModalVisible(true);
            }}>
              <View style={styles.imageView}>
  
              <Text style={{color:'white'}}>Book a Ride</Text>
  
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
      
    )
}

export default Home
const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.36,
      shadowRadius: 12.35,
      elevation: 11,
      backgroundColor: "white",
      overflow: "hidden",
    },
    longView: {
      width: width,
      height: height * 0.07,
  
      // backgroundColor: "#F0F0F0",
      borderRadius: 50,
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 15,
      paddingHorizontal: width * 0.1,
    },
    imageView: {
      alignItems: "center",
      justifyContent:'center',
      marginTop: height * 0.05,
      backgroundColor:'teal',
      height:200,
      borderRadius:25,
      marginHorizontal:20
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    
      },
      modalView: {
        // height: height * 0.35,
        margin: 20,
        height: height * 0.4,
        backgroundColor: "white",
        borderRadius: 40,
        padding: 35,
        paddingTop: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      AddStyle: {

        width: width * 0.5,
        borderRadius: 0,
        height: height * 0.04,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        marginTop: 20,
        backgroundColor: "#6A22C6",
        borderRadius: 20,
        zIndex: -1,
      },
      InputStyle: {
        zIndex: -1,
        width: width * 0.35,
        height: 20,
        borderColor: "#FBB8AF",
        borderWidth: 1,
        marginLeft: 20,
      },
  });