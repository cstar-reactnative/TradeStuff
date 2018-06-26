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

    titleView:{
        margin:10,
        alignItems:'center'
    },

    subTitleView:{
        alignItems:'center'
    },
    detailView:{
        margin:10,
        alignItems:'center',
        backgroundColor:Colors.darkGrayColor,
        padding:10,
        height:100,
        justifyContent:'center'
    },
    contentItemView:{
        width: '100%',
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

    buttons: {
        width:'100%',
        paddingTop:5,
        paddingLeft:60,
        paddingRight:60,
        height:150,
        flexDirection:'column'
    },
    
    commentArea:{
        width:'100%',
        height:100,
        borderColor:Colors.darkGrayColor,
        borderWidth:1,
        borderRadius:3,
        padding:3,
    },
    bottomView: {
        width:'100%',
        bottom:0,
        height:50,
        alignItems:"center",
        padding:5,
        backgroundColor:'transparent',
        justifyContent:'center'
    },
    feedbackBtn: {
        width: 200,
        alignItems:'center',
        backgroundColor:'transparent'
    },
};