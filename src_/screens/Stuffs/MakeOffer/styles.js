
import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerView: {
        height: 50
    },

    contents : {
        width:'100%',
        height:'100%',
        paddingLeft: 30,
        paddingRight: 30
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
        width: 200,
        alignItems:'center',
        backgroundColor:'transparent'
    },
    radius10Btn:{
        width:'100%',borderRadius:5,height:'100%'
    },
    itemButton:{
        marginTop:3,
        height:30,
    },
    oneItem: {
        height:250,        
        margin:10,
        borderWidth:5,
        borderRadius:10,
        borderColor:Colors.orangeColor
    },
    itemImage: {
        width:'100%',
        height:'100%'
    },
    itemTitle:{
        position:'absolute',
        width:'100%',
        alignItems:'center',
    },
    priceLabel: {
        position:'absolute',
        right:0
    }
};