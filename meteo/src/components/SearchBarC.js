import React from 'react'

import { Text, View,StyleSheet} from 'react-native';
import { Provider ,Appbar,Card,Searchbar} from 'react-native-paper';


const SearchBarC = (props) => {
    const {city,setCity}=props

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchCity(query);
    // const _goBack = () => console.log('Went back');
    // const _handleSearch = () => console.log('Searching');
    // const _handleMore = () => console.log('Shown more');
return(

    <View style={styles.bar}>
       <Card>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={city}
          />
       </Card>
      </View>

)


}

const styles= StyleSheet.create({
    bar:{
        textAlign:'center',
        margin: 15,
      
        justifyContent: 'space-between',}

})


export default SearchBarC