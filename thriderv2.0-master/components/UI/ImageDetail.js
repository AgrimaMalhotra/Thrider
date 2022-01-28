import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const ImageDetail = ({ imageSource, title }) => {
  return (
    <View style={styles.container}>
   
      <Image source={imageSource}  style={styles.image} />
      <Text style={styles.text}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height * 0.25,
    width: width * 0.43,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },  
    shadowColor: 'black',  
    shadowOpacity: 1,  
    elevation: 20,  
    marginHorizontal: height * 0.017,
    marginVertical: 15,
    borderRadius: 15,
  },
  image: {
    height: height * 0.15,
    width: width * 0.34,
    alignSelf: 'center'
  },
  text:{
    marginTop :  height * 0.02,
  }
});

export default ImageDetail;