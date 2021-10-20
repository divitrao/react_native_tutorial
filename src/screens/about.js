import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {globalStyles} from '../globalStyle/GlobleStyle'

export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.textItem}>HI from About</Text>
        </View>
    )
}

