

import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
        alignItems:'center',
        justifyContent:'center'
    },
    scrollContainer:{
        flex:1,
        width:'100%'
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
    contents : {
        width:'100%',
        height:'100%',
        paddingTop:5,
        paddingLeft: 30,
        paddingRight: 30
    },
    selectStuffView :{
        flexDirection:'row'
    },
    stuffImage:{
        flex:1,
        height:100,
        width:100,
        margin:5
    },
    addPhotoButton:{
        flex:1,
        margin:5
    },
    imageStyle:{
        width:'100%',
        height:'100%',
        borderWidth:0.5,
        borderColor: Colors.darkGrayColor
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
    },
    itemInputArea: {
        borderWidth:0.5,
        borderRadius:3,
        height:70,
        justifyContent:'flex-start',
        paddingTop: 3,
        paddingLeft: 5,
        borderColor:Colors.darkGrayColor
    },
    view50Left: {
        flex:1,
        height:'100%',
        paddingRight:10
    },
    view50Right: {
        flex:1,
        height:'100%',
        paddingLeft:10

    },
    contain2Item: {
        width:'100%',
        flexDirection:"row"
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
    pickerViewStyle:{
        backgroundColor:'#ff0'
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
    }
};