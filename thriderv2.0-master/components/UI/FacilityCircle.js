import React from 'react'
import { StyleSheet, View, Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');

const ReviewCircle = () => {

    return (
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.ReviewCircle}></View>
        </View>
    )
}

export default ReviewCircle;

const styles = StyleSheet.create({
   
    ReviewCircle:{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 10
    },
})
