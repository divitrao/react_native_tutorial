import React from "react";
import About from "../screens/about";
import HomeStack from "./homeStack";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import MovieStack from "./movieStack";
const Drawer = createDrawerNavigator()

const DrawerMenu = ()=>{
    
    return(
        
        <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='Homes' options={{headerShown:false}} component={HomeStack} />
            <Drawer.Screen  name='About' component={About} />
            <Drawer.Screen name="Movie" options={{headerShown:false}} component={MovieStack}/>
        </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerMenu