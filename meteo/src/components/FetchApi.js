import React, { useEffect,useState }  from 'react'
import {View,Text} from 'react-native'
import axios from 'axios'



const FetchApi = () => {

    const keyAP="3b7367359cf729af229ab895f50cf00c"
   const URL= 'https://api.openweathermap.org/data/2.5/weather?q=Rabat&limit=1&appid=3b7367359cf729af229ab895f50cf00c&lang=fr'
    const [data, setData] = useState([]);

    const [error, setError] = useState(null);
    
    console.log(URL)

const getWeather = async() =>{
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
    
    
    
    
    
    useEffect(() => {getWeather()
        
      },[])

      console.log("les datas",data)

   



     

    return (

<View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
        {((typeof(data.main) != 'undefined') && (typeof(data.main.temp) != 'undefined')) &&
        <View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
           <Text style={{color:'black'}}> {data.main.temp}</Text>
           </View>
       
        
    }
    

    </View>

     
)
}

                  
  


export default FetchApi