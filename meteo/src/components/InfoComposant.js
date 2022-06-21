import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Icon from '../../assets/weatherIcon'

const InfoComposant = () => {
    return (
        <View style={styles.container}>
        <Icon name="wi-day-sunny" size ={64}/>
        <Text > humidité </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    }


})
export default InfoComposant