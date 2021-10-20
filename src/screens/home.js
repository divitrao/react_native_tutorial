import React , {useState} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../globalStyle/GlobleStyle'


export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        { title: 'Mision Impossible', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Forrest Gump', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Shawshank Redemption', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('reviewDetail',item)}>
                        <Text style={globalStyles.textItem}>{item.title}</Text>
                    </TouchableOpacity>

                )} /> 
                
        </View>
    )
}

