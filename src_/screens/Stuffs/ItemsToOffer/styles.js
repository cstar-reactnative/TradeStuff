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
    headerView:{
        height:100,
        backgroundColor:Colors.darkGrayColor
    },
    titleView:{
        height:30,
        width:'100%',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    itemsView:{
        flex:1,
        width:'100%',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:5,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    mainItem:{
        width:60,
        height:60
    },
    contentItemView:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems:'center',
        padding:10,
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
        marginRight:20,
        backgroundColor:'transparent'
    },

    bottomButton:{
        flexDirection:"row",
        justifyContent:'center',
        flex:1
    },
    button: {
        width:200,
        height:'100%',
        padding: 3
    }
};