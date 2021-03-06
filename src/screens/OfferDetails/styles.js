
import {Colors} from '@theme';

export default {
    container: {
        flex: 1, 
        padding: 0,
        margin: 0
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
        padding: 10,
        backgroundColor: Colors.lightGrayColor,
    },
    detailScroll:{
        backgroundColor: Colors.lightGrayColor,
    },
    bottomView: {
        position:'absolute',
        width:'100%',
        bottom:0,
        backgroundColor: Colors.lightGrayColor,
        height:90,
        alignItems:"center",
        flexDirection: 'row',
        padding:5,
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
    diffBg:{
        backgroundColor: Colors.whiteColor
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
        marginBottom:10,
        padding:0,
        marginRight:10,
        borderWidth:6,
        borderColor:Colors.orangeColor,
    },
    greenBorder: {
        borderColor:Colors.greenColor,
    },
    greenBg: {
        backgroundColor:Colors.greenColor,
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
        marginTop: 0,
        marginBottom: 0,
        padding:0,
    },
    shareBtn: {
        alignItems: 'center',
        color: Colors.greenColor,
        bottom:-8
    },
};