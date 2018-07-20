import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

import {Colors} from '@theme';
import {AppTheme} from '@components';
import { COLOR,ThemeProvider,Toolbar ,Icon} from 'react-native-material-ui';


export default class UserCard extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            active: props.currentActive
        });
    }



    render() {
        return (
           <View>
               <Text />
               <Image />
               <View 
               
               />
           </View>
        )
    }
};