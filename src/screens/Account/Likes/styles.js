import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerView:{
        height:50
    },
    contentList: {
        flex: 1, 
        width:'100%',
        height:'100%'
    },

    contentItemView:{
        width: '100%',
        padding:10,
        height: 190,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    contentItemImage:{
        flex:1,
        height:'100%',        
        alignItems: 'stretch',
        position: 'relative',
        flexDirection:'row'
    },
    imageStyle:{
        height:'100%',
        width:'100%'
    },
    
    contenItemMainYellow:{
        flex:1,
        height:'100%',
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.orangeColor
    },

    favoriteIcon:{
        position:'absolute',
        top:3,
        left:6,
        width:30,
        height:30,
        alignItems:'center',
    },

    darkGray: {
        color: Colors.orangeColor
    },

    priceIcon: {
        position:'absolute',
        top:6,
        right:6,
        width:30,
        height:20,
        alignItems:'center',
        backgroundColor: Colors.orangeColor
    },

    priceText: {
        color: 'white'
    }
};