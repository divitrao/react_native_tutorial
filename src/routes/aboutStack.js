import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import About from '../screens/about'
const stack = createNativeStackNavigator();

const AboutStack = ()=>{
    return(
        
            <stack.Navigator>
                <stack.Screen options={{headerStyle:{backgroundColor:'lightgrey'}}} name='About' component={About} />
            </stack.Navigator>
        
    )
}

export default AboutStack
