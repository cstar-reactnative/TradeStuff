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
        padding:20,
        height: 200,
        justifyContent: 'center',
        alignItems:'center',
        padding:20,
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
        top:3,left:0,
        width:'100%',
        height:30,
        alignItems:'center',
    }
};