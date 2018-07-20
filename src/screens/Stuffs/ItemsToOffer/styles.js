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
        backgroundColor:Colors.lightGrayColor,
        borderColor: Colors.orangeColor,
        borderWidth: 3,
        flexDirection:'row'
    },
    sectionTitle: {
        color: Colors.darkGray,
        fontSize: 18
    },
    titleView:{
        height:30,
        width:'100%',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        flexDirection:"column",
        justifyContent: 'space-between',
    },
    favoriteBtn:{
        alignItems:'flex-end',
    },
    carouselPrice: {
        paddingLeft:5,
        paddingRight:5,
        fontSize: 25,
        height:'100%',
        color:Colors.whiteColor,
        backgroundColor:'#f79a0e',
        height:35,
    },
    itemsView:{
        flex:1,
        width:'100%',
        paddingLeft:30,
        paddingTop:15,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'flex-start'
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