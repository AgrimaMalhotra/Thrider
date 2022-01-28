import React,{useState,useEffect} from 'react'
import { View, Text ,TouchableOpacity,StyleSheet,Dimensions,ActivityIndicator,FlatList} from 'react-native'
import { getRideInfo,getD2dInfo } from '../api/methods'
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
const Track = () => {
    var dummydata=[]
    const [ride, setRide] = useState(null)
    const [d2d, setD2d] = useState(null)
    const [findata, setFindata] = useState([])
    const [loaded, setLoaded] = useState(1)
    useEffect(() => {
        async function fetch(){
        setD2d(await getD2dInfo())
        setRide(await getRideInfo())
        if(ride){
            dummydata.push(ride)
        }
        if(d2d){
            dummydata.push(d2d)
        }
      
        setFindata(dummydata)
        setLoaded(0)
        }

        fetch()
    }, [ride,d2d,findata])


   
    const Transactions_Today = ({ item }) => {
      
        return (
          <>
    
            <TouchableOpacity >
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
                      <Text>Delivery by:  {item.drivername?item.drivername:'pending'}</Text>
                      <View
                        style={{
                          height: 20,
                          borderRadius: 50,
                          backgroundColor: "#FEE7DB",
                          marginLeft: 5,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text>{item.driverphone?item.driverphone:'pending'}</Text>
                      </View>
                    </View>
                    <View>
                    <Text style={styles.IdStyle}>{item.pick} to {item.drop}
                       
                    
                    </Text>
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
                {item.eta?item.eta:'eta NA'}
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

export default Track

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
    }
  });