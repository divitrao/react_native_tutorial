import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container:{
        padding:24,
        flex:1,
        fontSize:33,
        alignItems:'center'
        },

    textItem:{
        fontSize:33,
        padding:10,
        fontFamily:'RobotoMono-BoldItalic'
    },

    button:{
        width:100,
    },

    headerStyle:{
        backgroundColor:'#f4511e'
    },
    movie_list:{
        flex:1,
        flexDirection:'column',
        fontSize: 20,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    },

    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1, height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
        // justifyContent:'center',
        

    },

    cardContent:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"space-around",
        marginHorizontal:18,
        marginVertical:10,
        fontSize:25,
        fontFamily:'RobotoMono-ThinItalic'

    },

    image_size:{
        width:220,
        height:300,
        marginTop:10
        
    },

    button_style:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        
    },

    button_style_forward:{
        padding:3
    },

    button_style_backward:{
        padding:3
    },
    movie_detail:{
        display:'flex',
        
    },
    movie_detail_text:{
        fontSize:20,
        textAlign:'justify'
    }
})

