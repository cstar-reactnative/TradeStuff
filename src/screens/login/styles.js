import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors} from '@theme';

export default {

    container: {
        flex: 1, 
        marginTop:20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center"
    },

    itemRow: {
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: Colors.backgroundPrimary,
        margin: 2,        
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:280,
        flexDirection:'row'
    },
    loginRow:{
        marginTop: 10,   
        width:280,

        backgroundColor: Colors.backgroundPrimary,
    },
    itemLabel: {
        flex:1,
        alignItems: 'flex-end'
    },

    itemInput: {
        margin:15,
        borderRadius: 2,
        padding:5,
        borderWidth: 0.5,
        width: 150,
        height:25
    },

    btn : {
        alignItems: 'center',
        width:280,
    },
    
    btnText : {
        fontSize: 24
    }

};
