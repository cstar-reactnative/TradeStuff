

import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerScroll: {
        height: 80,
        backgroundColor:Colors.verylightGrayColor
    },
    headerScrollView: {
        width: '100%',
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
    addStuffBtn: {
        width: 180,
        backgroundColor:'transparent',
        height: 40,
        flex: 1,
    },
    bottomView: {
        height:50,
        flexDirection:"row",
        alignItems:"center",
       
    },
    radius10Btn:{
        flexDirection:'row',
        backgroundColor:'#79af13',
        width:"100%",
        borderRadius:10,
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    scrollArrowLeft:{
        position:'absolute',
        width:30,
        height:'100%',
    },
    scrollArrowRight:{
        position:'absolute',
        right:0,
        width:30,
        height:'100%',
        alignItems:'flex-end',
    },
    imageContainer:{
        borderColor:Colors.orange,
        borderWidth:2,
        borderRadius:8}
};