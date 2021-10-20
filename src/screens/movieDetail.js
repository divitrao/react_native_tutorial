import React from 'react'
import {View, Text} from 'react-native'
import {globalStyles} from '../globalStyle/GlobleStyle'

export default function MovieDetail({navigation, route}){
    return(
        
        <View style={[globalStyles.movie_detail,globalStyles.card]}>
            <Text style={globalStyles.movie_detail_text}>{route.params.description_full} </Text>
        </View>
        
    )
}