

import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerView: {
        height: 50
    },
    headerTitle: {
        alignItems: "center",
        padding: 20
    },
    headerText: {
        color: Colors.darkGrayColor,
        textAlign:"center",
        fontSize: 25
    },
    oneRow: {
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    oneItem:{
        marginLeft:5,
        marginRight:5,
        width:80,
        height:80,
        backgroundColor:Colors.greenColor
    },
    lastOneItemImage:{
        marginLeft:20,
        width:50,
        height:50,
    },
    lastOneItem:{
        paddingLeft:10,
        paddingRight:10,
        width:260,
        height:80,
        backgroundColor:Colors.greenColor,
        flexDirection:'row',
        alignItems:'center'
    },
    lastoneItemText:{
        
    },
    imageStyle:{
        width:'100%',
        height:'100%'
    },
    copylinkBtnStyle:{
        width:'100%',
        borderRadius:0,
        height:'100%',
        
    },
    copyLinkTextStyle:{
        marginLeft:20,
        fontSize:25
    }
};