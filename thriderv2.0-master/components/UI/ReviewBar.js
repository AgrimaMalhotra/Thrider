import React, {useState} from 'react'
import { StyleSheet, View, Dimensions, Text} from 'react-native'

const {width,height} = Dimensions.get('window');

const ReviewBar = () => {

    return (
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.ReviewBar}>
            </View>
            <View style={styles.ReviewCircle}></View>
        </View>
    )
}

export default ReviewBar;

const styles = StyleSheet.create({
    ReviewBar:{
        width: '90%',
        height: height * 0.12,
        backgroundColor: '#F0F0F0',
        margin: 20,
        borderRadius: 50
    },
    ReviewCircle:{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',
        position: 'absolute',
        left: 10,
        top: 10
    },
})
