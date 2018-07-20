
import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
    },
    headerView: {
        height: 50,
        margin:10
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
    itemsView:{
        flex:1,
        width:'100%',
        paddingLeft:10,
        paddingTop:15,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    mainItem:{
        width:60,
        height:60
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
    twoItem: {
        height:100,        
        marginLeft:10,
        marginTop:0,
        marginRight:10,
        borderWidth:5,
        borderColor:Colors.greenColor
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
    },
    iconView:{
        alignItems: 'center',
        margin:0,
    },
    shareBtn: {
        marginTop: 30,
        marginBottom: 0,
        alignItems: 'center',
        color: Colors.greenColor,
    },
};