import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { globalStyles } from '../globalStyle/GlobleStyle'
const  MovieList =(data)=>{
    console.log(data,'fffffffffffffffffffff')
    return (
        
        <FlatList 
        data={data}
        renderItem={({item})=>(
            <Text style={globalStyles.textItem}>{item.title}</Text>

        )} />
        
    )
}

export default MovieList