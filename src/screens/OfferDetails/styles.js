
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
        paddingTop:5,
        flexDirection:"column",
        justifyContent: 'space-between',
    },
    itemsView:{
        flex:1,
        width:'100%',
        paddingLeft:5,
        paddingTop:5,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    mainItem:{
        width:60,
        height:60,
        margin:0,
        padding:0,
    },
    contents : {
        width:'100%',
        height:'100%',
        paddingLeft: 30,
        paddingRight: 30
    },
    detailsText:{
        alignItems: 'center',
        margin: 10,
    },
    bottomView: {
        position:'absolute',
        width:'100%',
        bottom:0,
        height:90,
        alignItems:"center",
        flexDirection: 'row',
        padding:5,
        backgroundColor:'transparent',
        justifyContent:'center'
    },
    addStuffBtn: {
        width: 100,
        margin: 20,
        alignItems:'center',
        backgroundColor:'transparent'
    },
    radius10Btn:{
        width:'100%',height:'100%'
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
        height:90,        
        marginLeft:10,
        marginTop:0,
        padding:0,
        marginRight:10,
        borderWidth:6,
        borderColor:Colors.greenColor
    },
    itemImage: {
        width:'100%',
        padding: 5,
        height:'100%'
    },
    itemTitle:{
        position:'absolute',
        top: 0,
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
        padding:0,
        marginTop: 30,
        marginBottom: 0,
        padding:0,
    },
    shareBtn: {
        alignItems: 'center',
        color: Colors.greenColor,
        bottom:-8
    },
};