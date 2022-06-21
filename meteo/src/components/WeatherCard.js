import React  from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import Icon from '../../assets/weatherIcon'

  



const WeatherCard = (props) => {
   const {temp,temp_min,temp_max,temp_ressenti,vent,hum,date,desc,city} = props
return (
   

       
    <Card style={{flex:1}}>
    <Card.Title title={city} />
        <Card.Cover source={{ uri:'https://th.bing.com/th/id/OIP.Ptm5hNKl6WucOj1o3NjuewHaF6?pid=ImgDet&rs=1'}} />
  
    <Card.Content style={[styles.temperature]} >

        <Text style={styles.temperatureText}>{temp}</Text>
      
        <Card.Content >
            <Card.Content style={styles.cardContent} >
            <Icon name="wi-cloud-up" size ={58} color='gray'/>
            <Paragraph>{temp_max}</Paragraph>
            </Card.Content>
            <Card.Content style={styles.cardContent} >
            <Icon name="wi-cloud-down" size ={58} color='gray'/>
            <Paragraph>{temp_min}</Paragraph>
            </Card.Content>
          
        
    
    
        </Card.Content>

   
    </Card.Content>



    <Card.Content style={[styles.cardContent,styles.border]} >
        <Title>{desc} </Title>
        
    </Card.Content>

    <Card.Content style={[styles.cardContent,styles.border]} >
        <Title>Ressenti </Title>
        <Paragraph>{temp_ressenti}</Paragraph>

   </Card.Content>
   


    <Card.Content style={[styles.cardContent,styles.border]} >
  
    <Card.Content style={[styles.detail]} >
       <Title> vent </Title>
       <Icon name="wi-night-cloudy-gusts" size ={64} color='gray'/>
       <Paragraph>{vent}</Paragraph>
    </Card.Content>
    <Card.Content style={[styles.detail]} >
       <Title>Humidité </Title>
       <Icon name="wi-humidity" size ={64} color='gray'/>
       <Paragraph>{hum}</Paragraph>
    </Card.Content>
 
</Card.Content>
    <Card.Content style={styles.cardContent} >
            <Title> Date du dernier relevé</Title>
            
            <Paragraph> {date}</Paragraph>
         </Card.Content>
   
   </Card>


    
)

}

const styles = StyleSheet.create({

    cardContainer:{
        flex:1

    },

    card:{

        flex:1,
        justifyContent:'center',
        alignItems:'center'
  
    },
    cardContent:{
        flexDirection:'row',
        justifyContent:'space-around',
    
    },
    temperature :{
        flexDirection:'row', 
        justifyContent: 'space-evenly',
      borderWidth:2,borderColor:'gray'                                                        
    },
    temperatureText:{
     
        fontSize:90,
        fontWeight:"bold",

    },
    detail:{ justifyContent:'center',
    alignItems:'center'

    },
    border:{
    borderColor:'gray',borderBottomWidth:3,
        padding:5,
        margin:3
      
    }


})

export default WeatherCard