
import {Colors} from '@theme';
export default {

    container: {
        flex: 1, 
    },
    
    accountView: {
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'row',
    },

    menuView: {
        width:160,
        height:'100%',
        backgroundColor: Colors.darkGrayColor,
        flexDirection:'column',
        alignItems:"center"
    },

    detailView: {
        flex:1,
        height:'100%',
    },

    avatar: {
        marginTop: 90,
        marginBottom:10,
        width:100,
        height:100,
        justifyContent:'center'
    },

    imageStyle: {
        width:'100%',
        height:'100%',
        borderRadius:50,
        borderColor:Colors.whiteColor,
        borderWidth:3,
    },

    menuButton: {
        marginTop:2,
        marginBottom:2,
        padding:5,
        padding:5,
        width:'100%',
    },

    menuLabel: {
        marginTop:2,
        marginBottom:2,
        width:'100%',
        height:30,
        alignItems:'center'
    },

    dividerLine:{
        marginTop:2,
        marginBottom:2,
        width:'100%',
        height:2,
        backgroundColor: Colors.whiteColor
    },

    menuLabelText: {
        marginTop:10,
        fontSize: 12,
        color: Colors.whiteColor,        
    },
    menuLabelValue: {
        marginTop:10,
        fontSize: 15,
        color: Colors.whiteColor,        
    },

    detailScroll: {
        width:'100%',
        height:'100%',
        padding:10,
    },

    detailItem: {
        width:'100%',
        height:70,
        flexDirection:'column',
    },
    detailItemlabel: {
        marginTop:15
    },
    itemInput: {
        borderWidth:0.5,
        borderRadius:3,
        height:30,
        justifyContent:'center',
        padding: 5,
        borderColor:Colors.darkGrayColor
    }
};