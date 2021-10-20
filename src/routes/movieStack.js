import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MoviesPage from '../screens/movies';
import MovieDetail from '../screens/movieDetail';


const stack = createNativeStackNavigator();

const MovieStack = ()=>{
    return(
        
            <stack.Navigator>
                <stack.Screen options={{title:'Movies'}} name='Movies' component={MoviesPage} />
                <stack.Screen options={{title:'Movie Detail'}} name='movieDetail' component={MovieDetail} />
            </stack.Navigator>
        
    )
}

export default MovieStack
