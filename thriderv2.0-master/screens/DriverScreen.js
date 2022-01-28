import React,{useState,useEffect,useContext} from 'react'

import { View, Text ,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,FlatList,LoadingIndicator,Modal,TextInput} from 'react-native'
import { getRides,getD2d } from '../api/methods'
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../components/Context/AuthContext";
import { updateD2d,updateRide,getData } from '../api/methods';
const { width, height } = Dimensions.get("window");

const DriverScreen = ({navigation}) => {
    var dummydata=[]
    const [findata, setFindata] = useState([])
    
    
    useEffect(() => {
        async function fetch(){
        var r_d = await getRides()
        var d_d = await getD2d()
        
        
        if(r_d){
            dummydata=dummydata.concat(r_d)
        }
        if(d_d){
            dummydata=dummydata.concat(d_d)
        }
        setFindata(dummydata)
        // setLoaded(0)
        }

        fetch()
    }, [findata])
    const [modalVisible, setModalVisible] = useState(false);
    const { signOutTrivial } = useContext(AuthContext);
    const [eta, setEta] = useState(null);
    const [drop, setDrop] = useState(null);
    const [tempData, setTempData] = useState(null)
    const [ride, setRide] = useState(null)
    
    const [d2d, setD2d] = useState(null)
    const [loaded, setLoaded] = useState(0)
    
 
    const performUpdate=async()=>{
      const d=await getData()
    
      if(tempData.d2d){
      
        // console.log(tempData)
        await updateD2d(
          tempData.uid,
          d.fname,
          d.phone,
          eta
        )
      }
      else{

        await updateRide(
          tempData.uid,
          d.fname,
          d.phone,
          eta
        )
      }
    
      setModalVisible(false)
      navigation.navigate('Map',{
        driverDet:d,
        userDet:tempData
      })
    }
    const Transactions_Today = ({ item }) => {
      setTempData(item)


        return (
          <>
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
                  Confirmation Prompt
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
                      ETA
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={eta}
                      onChangeText={(text) => setEta(text)}
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
                      Type Confirm 
                  </Text>
                  <TextInput
                      style={styles.InputStyle}
                      value={drop}
                      onChangeText={(text) => setDrop(text)}
                    />

                  </View>
                </View>

                <TouchableOpacity
                  style={styles.AddStyle}
                  onPress={() => {
                    performUpdate()
                   
                 console.log('booked')
                  }}
                >
                  <Text style={{ color: "#fff" }}>Confirm!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
            <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 5,
                  alignItems: "center",
                  height:height*0.2,
                  backgroundColor:'teal',
                  borderRadius:30
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ marginLeft: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text>{item.d2d?'D2D ':'Ride '} for:  {item.username?item.username:'pending'}</Text>
                      <View
                        style={{
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: "#FEE7DB",
                          padding:2,
                          marginLeft: 5,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>{item.userphone?item.userphone:'pending'}</Text>
                      </View>
                    </View>
                    <View>
                    <Text style={styles.IdStyle}>{item.pick} to {item.drop}</Text>
                    <Text style={{color:"black"}}>
                Rs. {item.cost?item.cost:' NA'}
                  </Text>
                  </View>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#FEE7DB",
                    padding: 5,
                    borderRadius: 20,
                    height: height * 0.04,
                    // width: width * 0.25,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text>
               Number: {item.count?item.count:'NA'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        );
      };
    
    return (<>

 
       
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
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
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
           
            }}
          >
           
          </View>
     {loaded?(  <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="dodgerblue" />
          </View>):( <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            keyExtractor={(obj) => obj.id}
            data={findata}
            renderItem={Transactions_Today}
            style={styles.FlatlistStyle}
          />
    )}
         
     
      </View>

        </>
    )
}

export default DriverScreen

const styles = StyleSheet.create({
    PicStyle: {
      height: height * 0.05,
      width: height * 0.05,
    },
    FlatlistStyle: {
      margin: 10,
      height: height * 0.5,
      marginTop:-100
    },
    WalletPicStyle: {
      height: height * 0.2,
      alignSelf: "center",
      margin: 15,
     
    },
    IdStyle: {
      fontSize: 15,
      color:'red'
    },
    BalanceView: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: height * 0.22,
    },
    BalanceText: {
      fontSize: 25,
      opacity: 0.7,
      marginBottom: 10,
    },
    AmountStyle: {
      fontSize: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 50,
      padding: 35,
      width: width,
      height: height / 2,
      position: "absolute",
      bottom: -width * 0.1,
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
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
        paddingVertical: 0,
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
