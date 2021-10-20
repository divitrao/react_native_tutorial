import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/home'
import ReviewDetail from '../screens/reviewDetail'


const stack = createNativeStackNavigator();

const HomeStack = ()=>{
    return(
        
            <stack.Navigator>
                <stack.Screen options={{title:'HOME'}} name='Home' component={Home} />
                <stack.Screen options={{title:'Review Detail'}} name='reviewDetail' component={ReviewDetail} />
            </stack.Navigator>
        
    )
}

export default HomeStack
