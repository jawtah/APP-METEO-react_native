import React,{ useEffect,useState } from 'react'
import {View,Text,Form,Button} from 'react-native'
import dayjs from 'dayjs'

import {Searchbar} from 'react-native-paper'
import axios from 'axios'


import WeatherCard from './src/components/WeatherCard'
 
const  App =() => {



  
   const [data, setData] = useState([]);
   const [city,setCity] = useState('Rouen')
   
   const [error, setError] = useState(null);
   
   console.log(URL)

const getWeather = async(city) =>{
  const keyAP="3b7367359cf729af229ab895f50cf00c"
  const URL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&appid=${keyAP}&lang=fr`
   await axios.get(URL)
   .then(response => {
    //  setTemp(response.data.main.temp)
       setData(response.data) 
    
})
   
   
   .catch(error=> {
     console.error("Error fetching data: ", error)
     setError(error)
   })
 
   
}
   
   
   
   
   
   useEffect(() => {getWeather(city)
       
     },[])

     console.log("les datas",data)
  


    
 
   let temp = 0
   let temp_min = 0
   let temp_max=0
   let temp_ressenti=0
   let vent=0
   let uv=0
   let hum=0
   let desc=""
   let date=""
   let datee=""
   let icon_d=""
   let icon=""
  

  
  if ((typeof(data.main) != 'undefined') && (typeof(data.main.temp) != 'undefined') && (typeof(data.main.temp_min) != 'undefined')&&(typeof(data.main.temp_max) != 'undefined')){

    temp=Math.round(data.main.temp -273.15)
    temp_min=Math.round(data.main.temp_min -273.15)
    temp_max=Math.round(data.main.temp_max -273.15)
    temp_ressenti=Math.round(data.main.feels_like -273.15)
    vent=Math.round(data.wind.speed *3.6) 
    uv=data.weather.description
    hum=data.main.humidity 
    desc=data.weather[0].description
  
    date = data.dt
  

  
    datee= dayjs(Date(date)).format('DD/MM/YYYY')
  }
  

 
  return (
<View style={{flex:1}}>
  
{((typeof(data.main) != 'undefined') && (typeof(data.main.temp) != 'undefined')) &&
    <>
          
    <Searchbar  placeholder="Search"
    onChangeText={(city)=>setCity(city)}
    onBlur={()=> getWeather(city)}
    value={city} />
    
     <WeatherCard city={city} temp={temp} temp_min={temp_min} temp_max={temp_max} 
                  temp_ressenti={temp_ressenti} vent={vent} uv={uv} hum={hum} 
                    desc={desc} date={datee}  />
       </>      
    }
      </View>   

  )
}
 



 export default App


//  <View>

//  </View>
 

 