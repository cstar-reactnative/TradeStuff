

import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerScroll: {
        flexDirection: 'row',
        height: 80,
        backgroundColor:Colors.verylightGrayColor
    },
    headerScrollView: {
        flex: 1,
        height: '100%',
        padding: 1,
        backgroundColor:Colors.verylightGrayColor
    },

    contentList: {
        flex: 1, 
        width:'100%',
        height:'100%',
    },

    contentItemView:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        padding:5,

    },
    contentItemImage:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor:Colors.whiteColor,
        borderColor:Colors.orangeColor,      
        borderWidth:3,
        borderRadius:5
    },
    bottomView: {
        position:'absolute',
        width:'100%',
        bottom:0,
        height:50,
        alignItems:"center",
        padding:5,
        backgroundColor:'transparent',
        justifyContent:'center'
    },
    addStuffBtn: {
        width: 150,
        alignItems:'center',
        backgroundColor:'transparent',

    },
    radius10Btn:{
        flexDirection:'row',
        backgroundColor:'#79af13',
        width:"100%",
        borderRadius:25,
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    scrollArrowLeft:{
        width:30,
        height:'100%',
        marginRight: 10,
    },
    scrollArrowRight:{
        width:30,
        height:'100%',
        marginLeft: 10,
        marginRight: 5,
    },
    arrow: {
        width: 75,
        height: 75,
    },
    imageContainer:{
        borderColor:Colors.orange,
        borderWidth:2,
        borderRadius:8}
};