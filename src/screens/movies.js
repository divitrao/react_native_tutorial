import React from 'react'
import { useEffect, useState } from 'react'
import { Button, FlatList, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MovieLists from '../context/MovieList'
import { globalStyles } from '../globalStyle/GlobleStyle'
const MoviesPage = ({navigation})=>{
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const pressHandlerForward=()=>{
        setPage(page+1)
    }
    const pressHandlerBackward = ()=>{
        setPage(page-1)
    }
  const getMovies = async () => {
     try {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=10`);
      const json = await response.json();
      setData(json.data['movies']);
      console.log(response.status,'it is status')
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, [page]);

    return (
        <View style={globalStyles.movie_list}>
          
        <View style={globalStyles.movie_list}>
          
        {!isLoading &&  <FlatList 
                          contentContainerStyle={{display:'flex',flexDirection:'column'}}
                          data={data}
                          renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>navigation.navigate('movieDetail',item)}>
                            <View style={globalStyles.card}>
                            <View style={globalStyles.cardContent}>
                              <Text style={{textAlign:'center'}}>{item.title}</Text>
                              <Image source={{uri:item.large_cover_image}} style={globalStyles.image_size} />
                            </View>
                            </View>
                            </TouchableOpacity>
                          )} />}
          
          
          </View>
        <View style={globalStyles.button_style}>
        <View style={globalStyles.button_style_backward}>
        {page > 1 && <Button title="previous page" onPress={pressHandlerBackward}/>} 
        </View>
        <View style={globalStyles.button_style_forward}>
        <Button title="Next  page" onPress={pressHandlerForward}/>
        </View>
        </View>
                           
        </View> 
    )
    
    
}

export default MoviesPage