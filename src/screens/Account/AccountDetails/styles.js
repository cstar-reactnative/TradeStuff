import Constants from '../../../constants';
import {Colors} from '@theme';
export default {
    
    container: {
        flex: 1,
        backgroundColor: Constants.Colors.VeryLightGrey,
        margin: 3
    },
    imgView:{
        backgroundColor: Constants.Colors.White,
        borderColor: Constants.Colors.MediumGrey,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
        width: 70,
        height: 70,
        position: 'relative',
        zIndex: 1,
        left: 0,
        top: 0,
       
    },
    imgsView:{
        flex: 1,
    },
    secondSubView: {
        flexDirection: 'row',
        marginHorizontal: 5,
        flex: 1,
    },
    firstContainer:{
        backgroundColor: Constants.Colors.LightGrey,
        borderColor: Constants.Colors.Green,
        borderWidth: 1,
        flexDirection: 'row'
    },
    nameText:{
        color: Constants.Colors.Green,
        fontSize: 14
    },
    AddressText:{
        fontSize: 12
    },
    textSubView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImg:{
        width: 100,
        height: 100
    },
    userPic: {
       justifyContent: 'center',
       width: 70,
       height: 70,
       marginLeft: 15,
    },
    absoluteView:{
        position: 'absolute',
        top: 0,
        right: 0,
    },
    contentItemView:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        padding:10, 
    },
    contentItemImage:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor:Constants.Colors.whiteColor,
        borderColor:Constants.Colors.Green
    },
    absoluteButtons:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width:'100%',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor:Colors.lightGrayColor
    },
    radius10Btn:{
        flex: 1,
        borderRadius:5,
        height:'100%',
        color: 'red'
    },
    headerScroll:{
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1,
    },
    headerScrollView: {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        paddingRight: 10,
        right:27,
        backgroundColor:Colors.Green,
        borderRadius:2,
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
    bottomView: {
        height:50,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "#e2e2e2"
    },

    bottomButton:{
        flexDirection:"row",
        flex:1,
       justifyContent: 'center',
    },
    button: {
        flex: 50,
        width: 150,
        backgroundColor: 'white',
        borderColor: '#e2e2e2',
        borderWidth: 6,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
   
};