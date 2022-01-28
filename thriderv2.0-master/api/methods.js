import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function registration(email, password) {  //export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid)
    AsyncStorage.setItem('@user',currentUser.uid)
    console.log(AsyncStorage.getItem('@user'))
    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: email,
        password:password
      });
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
export async function details(firstname,lastname,age,phone,driver){
    const uid= await AsyncStorage.getItem('@user')
    console.log(uid)
    var fail=false

    try{
    const db = firebase.firestore();
    db.collection("users")
      .doc(uid)
      .set({
        fname:firstname,
        lname:lastname,
        phone:phone,
        age:age,
        isdriver:driver
      });
     } catch (err) {
      fail=true
      Alert.alert("There is something wrong!", err.message);
  }


return fail
}
export async function signIn(email, password) {
  var fail=false
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password).then((user)=>{AsyncStorage.setItem("@user",user.user.uid)});
  const f=await AsyncStorage.getItem('@user')
  console.log(f)

  } catch (err) {
    fail=true
    Alert.alert("There is something wrong!", err.message);
   
  }
  return fail
}
export async function getData(){
  const uid= await AsyncStorage.getItem('@user')
  var fail=false
  var d
  try{
    const db = firebase.firestore();
    await db.collection("users")
      .doc(uid)
      .get().then((data)=>{data.data()?d=data.data():data=null});
  } catch (err) {
      fail=true
      console.log( err.message)
  }
  return d
}
export async function sendRide(pickup,drop,count,uuid=0)
{
  let p,c,n
  var uid
  if(uuid){
     uid=uuid
  }
  else{
   uid= await AsyncStorage.getItem('@user')}
  var fail=false
  const db = firebase.firestore();
  await db.collection("users").doc(uid).get().then((data)=>{console.log(data.data().phone);
  count<2?c=20:c=10*count
p= data.data().phone
n=data.data().fname  })
  try{
    db.collection("rides")
      .doc(uid).set({
        uid:uid,
        pick:pickup,
        drop:drop,
        count:count,
        userphone:p,
        username:n,
        drivername:null,
        driverphone:null,
        eta:null,
        cost:c,
        d2d:false,
      })
      Alert.alert("Booking confirmed");
  } catch (err) {
      fail=true
      console.log( err.message)
  }
  return fail
}
export async function sendDelivery(pickup,drop,count,itemname,uuid=0)
{
  let p,n
  var uid
  if(uuid){
     uid=uuid
  }
  else{
   uid= await AsyncStorage.getItem('@user')}
  const db = firebase.firestore();
  var fail=false
 await db.collection("users").doc(uid).get().then((data)=>{console.log(data.data());

p= data.data().phone;
n=data.data().fname  })
  try{

    db.collection("delivery")
      .doc(uid).set({
        pick:pickup,
        drop:drop,
        count:count,
        userphone:p,
        username:n,
        uid:uid,
        item:itemname,
        drivername:null,
        driverphone:null,
        eta:null,
        cost:40,
        d2d:true,
      })
      Alert.alert("Booking confirmed");
  } catch (err) {
      fail=true
      console.log( err.message)
  }
  return fail
}
export async function getD2dInfo()
{
  let p
  const uid= await AsyncStorage.getItem('@user')
  const db = firebase.firestore();
  var d=null
  var fail=false

  try{

    await db.collection("delivery").doc(uid).get().then((data)=>{data.data()?d=data.data():d=null})
  } catch (err) {
      fail=true
      console.log( err.message)
  }

  return d
}
export async function getRideInfo()
{
  let p
  const uid= await AsyncStorage.getItem('@user')
  const db = firebase.firestore();
  var fail=false
  var d

  try{

   await db.collection("rides").doc(uid).get().then((data)=>{data.data()?d=data.data():d=null}
    )
  } catch (err) {
      fail=true
      console.log( err.message)
  }

  return d
}
export async function getRides()
{
  let p
  const uid= await AsyncStorage.getItem('@user')
  const db = firebase.firestore();
  var fail=false
  var d=[]

  try{

   await db.collection("rides").get().then((querySnapshot) =>{querySnapshot.forEach((doc)=>{
     d.push(doc.data());
   })}
    )
  } catch (err) {
      fail=true
      console.log( err.message)
  }

  return d
}
export async function getD2d()
{
  let p
  const uid= await AsyncStorage.getItem('@user')
  const db = firebase.firestore();
  var fail=false
  var d=[]

  try{

   await db.collection("delivery").get().then((querySnapshot) =>{querySnapshot.forEach((doc)=>{
    d.push(doc.data());
  })})
  } catch (err) {
      fail=true
      console.log( err.message)
  }

  return d
}
export async function updateRide(uid,drivername,driverphone,eta){
  const db = firebase.firestore();
  try{

    db.collection("rides")
      .doc(uid).update({
        drivername:drivername,
        driverphone:driverphone,
        eta:eta,
      })
      Alert.alert("Booking confirmed");
  } catch (err) {

      console.log( err.message)
  }
}
export async function updateD2d(uid,drivername,driverphone,eta){
  const db = firebase.firestore();
  try{

    db.collection("delivery")
      .doc(uid).update({
        drivername:drivername,
        driverphone:driverphone,
        eta:eta,
      })
      Alert.alert("Booking confirmed");
  } catch (err) {
 
      console.log( err.message)
  }
}
export async function finish(uid,d2d){
  const db = firebase.firestore();
  let d
  if(!d2d) {
    d="rides"
  }
  else
  {
    d="delivery"
  }
  db.collection(d).doc(uid).delete().then(()=>{
    console.log("Finished")
  })
}
// export async function loggingOut() {
//   try {
//     await firebase.auth().signOut();
//   } catch (err) {
//     Alert.alert('There is something wrong!', err.message);
//   }
// }