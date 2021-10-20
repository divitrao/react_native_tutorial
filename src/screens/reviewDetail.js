import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {globalStyles} from '../globalStyle/GlobleStyle'

export default function ReviewDetail({navigation, route}){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.textItem}>{route.params.title} </Text>
        </View>
    )
}

