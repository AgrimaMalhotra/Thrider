import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions,} from 'react-native';
const { width, height } = Dimensions.get("window");

const Spinner = () => {
    const [counter,setCounter] = useState(0);
     {counter < 0 ?  setCounter(0): console.log('')} 
    return(
        <View style={styles.SpinnerView}>
             <TouchableOpacity
             onPress={()=>{
                setCounter(counter - 1); 
             }}
             style={[styles.BtnStyle, { borderTopLeftRadius: 5, borderBottomLeftRadius: 5}]}
             ><Text>-</Text>
             </TouchableOpacity>
             
            <View style={styles.SpinnerTextView}><Text>{counter}</Text></View>
             

             <TouchableOpacity
             onPress={()=>{
                setCounter(counter + 1); 
             }}
             style={[styles.BtnStyle, { borderTopRightRadius: 5, borderBottomRightRadius: 5}]}
             ><Text>+</Text>
             </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    SpinnerView:{
        flexDirection:'row', 
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        width: width * 0.135,
    },
    BtnStyle:{
        backgroundColor: '#E0E0E0',
        width: width * 0.0375,
        alignItems: 'center',
        height: height * 0.03
    },
    SpinnerTextView:{
        width: width * 0.06,
        justifyContent: 'center',
        alignItems:'center'
    },

});

export default Spinner;