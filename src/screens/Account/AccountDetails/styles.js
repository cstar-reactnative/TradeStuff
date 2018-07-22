import Constants from '../../../constants';
import {Colors} from '@theme';
export default {
    
    container: {
        flex: 1,
        backgroundColor: Constants.Colors.VeryLightGrey,
        margin: 3
    },
    imgView:{
        backgroundColor: Constants.Colors.White
    },
    imgsView:{
        flex: 1
    },
    secondSubView: {
        flexDirection: 'row',
        marginHorizontal: 5,
        flex: 1,
    },
    firstContainer:{
        backgroundColor: Constants.Colors.VeryLightGrey,
        borderColor: Constants.Colors.Green,
        borderWidth: 1,
        flexDirection: 'row'
    },
    nameText:{
        color: Constants.Colors.Green,
        fontSize: 10
    },
    AddressText:{
        fontSize: 10
    },
    textSubView:{
        flex: 1,
        alignItems: 'center',
    },
    userImg:{
        width: 100,
        height: 100
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

    headerScrollView: {
        width: '100%',
        height: '100%',
        padding: 1,
        backgroundColor:Colors.verylightGrayColor
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
    }
   
};