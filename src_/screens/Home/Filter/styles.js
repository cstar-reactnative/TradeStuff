import Constants from '../../../constants';
import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
        alignItems:'center',
        justifyContent:'center'
    },
    headerView: {
        height: 50,
        width:'100%'
    },
    priceView :{
        width: "100%",
        height: 110,
        alignItems: "center"
    },
    bigLabel: {
        marginTop: 23,
        marginBottom:7,
        color : Constants.Colors.DarkGrey,
        fontSize: 25
    },
    itemView: {
        flex: 1,
        width: '100%',
    },

    pricelabels: {
        marginLeft:40,
        marginRight:40,
        height: 20,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",

    },
    left : {
        width:'50%',
        paddingLeft:3 ,
        alignItems:"flex-start",
        color:Colors.darkGrayColor
    },

    right : {
        width:'50%',
        paddingLeft:13 ,
        alignItems:"flex-start",
        color:Colors.darkGrayColor
    },

    itemContent: {
        marginLeft:40,
        marginRight:40,
        flex:1,
        justifyContent: 'space-between',
        flexDirection:"row",
    },
    priceInputLeft: {
        marginRight:10,
        padding:3,
        flex:1,
        borderWidth:0.3,
        borderRadius:3,
        fontSize:15
    },
    priceInputRight: {
        marginLeft:10,
        padding:3,
        flex:1,
        borderWidth:0.3,
        borderRadius:3,
        fontSize:15
    },
    btnCountry: {
        marginLeft:20,
        marginRight:20,
        width:300
    },

    bottomView: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:15,
        marginLeft:20,
        marginRight:20
    },

    bottomButton:{
        marginLeft:10,
        marginRight:10,
        padding:3,
        flex:1,
    }
};