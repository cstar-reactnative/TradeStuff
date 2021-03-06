import Colors from './colors';
export default {
    flexRow:{
        flexDirection:'row'
    },
    alignCenter: {
        alignItems:'center'
    },
    justifyCenter:{
        justifyContent:'center'
    },
    font15:{
        fontSize:15
    },
    font16:{
        fontSize:16
    },
    font17:{
        fontSize:17
    },
    font18:{
        fontSize:18
    },
    font20:{
        fontSize:20
    },
    font25:{
        fontSize:25
    },
    textCenter:{
        textAlign:'center'
    },
    white:{
        color:'#fff'
    },
    darkGray:{
        color:Colors.darkGrayColor
    },
    lightGrayColor:{
        color: Colors.lightGrayColor
    },
    orange:{
        color: Colors.orangeColor
    },
    green:{
        color: Colors.greenColor
    },
    backWhite:{
        backgroundColor:'#fff'
    },
    backDarkGray:{
        backgroundColor:Colors.darkGrayColor
    },
    backOrange:{
        backgroundColor: Colors.orangeColor
    },
    backGreen:{
        backgroundColor: Colors.greenColor
    },
    fullContent:{
        width:'100%',
        height:'100%'
    },

    fullContentnomargin:{
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },

    buttonGray:{
        
    },
    popUpContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        zIndex: 10,
    },
    popUpPopover:{
        backgroundColor: Colors.lightGrayColor,
        borderColor:Colors.darkGrayColor,
        borderWidth:3,
        borderRadius: 3,
        padding: 3,
        width: '96%',
    }
}