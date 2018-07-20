import Constants from '../../../constants';
import {Colors} from '@theme';
export default {

    container: {
        flex: 1, 
        width:'100%'
    },

    headerView: {
        height:50,
    },
    scrollView:{
        paddingTop:10,
        paddingBottom:10,
        flex:1,
        width:'100%'
    },
    carouselView: {
        marginLeft:10,
        marginRight:10,
        paddingTop:20,
        height:200,
        borderWidth:3,
        borderRadius:5,
        borderColor: '#f79a0e'
    },
    shareBtn:{
        padding:5,  
        backgroundColor:Colors.orangeColor,
        color: Colors.whiteColor
    },
    imageStyle: {
        width:'100%',
        height:'100%'
    },

    carouselItem: {
        position:'absolute',
        width:'100%',
        height:50,
        flexDirection:'row'
    },
    carouselTitleView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",
    },
    carouselTitle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "center",
        fontSize:16,
        color:Colors.darkGrayColor
    },
    carouselPrice: {
        paddingLeft:5,
        paddingRight:5,
        fontSize: 25,
        height:'100%',
        color:Colors.whiteColor,
        backgroundColor:'#f79a0e',
        height:35,
    },
    descriptionView: {
        width:'100%',
        marginTop:3
    },
    descTitle:{
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        marginTop:3,
        alignItems:'center'
    },
    titleFont:{
        fontSize: 20,
        flex:8,
        marginLeft:Constants.BaseStyle.DEVICE_WIDTH/100 * 8,
        textAlign:'center'
    },
    subtitleFont: {
        fontSize:14,
        color: Constants.Colors.Green,
        textAlign:'center'
    },
    descDesc: {
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        marginBottom:10
    },
    detailFont:{
        fontSize:15,
        color: Colors.dialogTextColor,
        
    },
    favoriteBtn:{
        flex:1,
        alignItems:'flex-end'
    },
    likeBtn:{
        flex:1,
        alignItems:'flex-center'
    },
    makeofferView: {
        width:'100%',
        height:150,
        marginTop:3,
        backgroundColor:Constants.Colors.MediumGrey,
        alignItems:'center'
    },
    offerBtn: {
        width:150,
        marginTop:20,
        alignItems:'center'
    }
};