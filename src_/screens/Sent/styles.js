import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },

    contentList: {
        flex: 1, 
        width:'100%',
        height:'100%',
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

    contenItemMainGreen:{
        flex:1,
        height:'100%',
        borderWidth:3,
        borderRadius:10,
        borderColor:Colors.greenColor
    },
    contenItemMainYellow:{
        flex:1,
        height:'100%',
        borderWidth:3,
        borderRadius:10,
        borderColor:Colors.orangeColor
    },
    imageStyle:{
        width: '100%', 
        height: '100%',
        borderRadius:8,
    },
    withdrawStyle:{
        position:'absolute',
        left:25,
        top:25
    },
    withdrawButton:{
        container:{
            backgroundColor:Colors.darkGrayColor,
        }
    }
};