import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
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
    contenItemMainGreen:{
        flex:1,
        height:'100%',
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.greenColor
    },
    contenItemMainYellow:{
        flex:1,
        height:'100%',
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.orangeColor
    },

    bottomView: {
        height:50,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:20,
        marginRight:20
    },

    bottomButton:{
        flexDirection:"row",
        flex:1,
    },
    button: {
        flex: 1,
        padding: 3
    }
};