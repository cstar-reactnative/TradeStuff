import Constants from '../../../constants';

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

    },
    secondSubView: {
        flexDirection: 'row',
        marginHorizontal: 5

    },
    firstContainer:{
        backgroundColor: Constants.Colors.VeryLightGrey,
        borderColor: Constants.Colors.Green,
        borderWidth: 1,
        flexDirection: 'row',
        padding : 10
    },
    nameText:{
        color: Constants.Colors.Green
    },
    textSubView:{
        // flex: 2,
        alignItems: 'center'
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
    headerScrollView: {
        width: '100%',
        height: '100%',
        padding: 1,
        backgroundColor:Constants.Colors.darkGrayColor
    },
    contentItemView:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        padding:20, 
    },
    contentItemImage:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor:Constants.Colors.whiteColor,
    },
    absoluteButtons:{
        position: 'absolute',
        flexDirection: 'row',
        Bottom: 0,
        right: 0,
        left: 0
    },
    radius10Btn:{
        width:'100%',borderRadius:5,height:'100%'
    },
   
};