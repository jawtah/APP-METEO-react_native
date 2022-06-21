import React from 'react'
import {View,Text,StyleSheet, ImageBackground } from 'react-native'
import WeatherCard from '../components/WeatherCard'



const WeatherScreen = () =>{

return(
    
<View style={styles.container}>
<ImageBackground source={{uri:'https://th.bing.com/th/id/OIP.Ptm5hNKl6WucOj1o3NjuewHaF6?pid=ImgDet&rs=1'}} resizeMode="cover" style={{width:'100%',flex:1}}/>

   <View style={{flex:1}}>
   <WeatherCard/>
   </View>

</View>

)


}
const styles = StyleSheet.create(

 {   
    container:{

      flex:1,

     },
     temp_container:{


     }

        
   
   
   
   
    })

    export default WeatherScreen
