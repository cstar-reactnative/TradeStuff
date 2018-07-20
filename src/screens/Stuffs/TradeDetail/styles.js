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
        alignItems:'center',
        marginTop:15
    },
    sentMark:{
        backgroundColor: Colors.whiteColor,
        color: Colors.greenColor,
        padding: 15, 
        margin:15,
        marginTop:20,
        paddingLeft: 47,
        paddingRight: 47
    },
    receivedMark:{
        backgroundColor: Colors.whiteColor,
        color: Colors.orangeColor,
        padding: 15,
        margin:15,
        marginTop:20,
        paddingLeft: 22,
        paddingRight: 22
    },
    detailView:{
        marginTop:10,
        alignItems:'center',
        backgroundColor:Colors.lightGrayColor,
        padding:10,
        flex:1,
        marginTop: 10
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
    imageColor1:{
        color: Colors.orangeColor
    },
    imageColor2:{
        color: Colors.greenColor
    },
    buttons: {
        flex:1,
        paddingTop:5,
        paddingLeft:60,
        paddingRight:60,
        flexDirection:'column',
    },
    oneRow: {
        marginTop:10
    },
    button: {
        marginTop:3
    }
};