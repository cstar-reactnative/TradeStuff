import {Colors} from '@theme';
export default {

    container: {
        flex: 1, 
    },

    headerView: {
        height:50,
    },

    contentView: {
        flex:1,
        width:'100%',
        backgroundColor:Colors.whiteColor,
    },

    scrollView: {
        width:'100%',
        height: '100%'
    },
    item: {
        width:'100%',
        height:50,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:'row',

    },
    titleLabel: {
        flex:1,
        justifyContent: 'center',

    },
    switchItem: {
        width:80,

        justifyContent: 'center',
    }
};