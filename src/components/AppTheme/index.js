import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import {Colors} from '@theme';
import { COLOR,ThemeProvider, Icon, Searchable} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: Colors.greenColor,
        secondaryColor: Colors.darkGrayColor
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
    marginTop:50
};

export default class AppTheme extends Component {

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                    {this.props.children}
            </ThemeProvider>
        );
    }
};

export class AppContainer extends Component {

    constructor(props) {
        super(props);

        statusBarColor = this.props.statusBarColor;
        
        if (!statusBarColor || statusBarColor== null){
            statusBarColor = 'transparent';
        }
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <View style={{flex:1,width:'100%',height:'100%',paddingTop:0,backgroundColor:statusBarColor}}>
                    {this.props.children}
                </View>
            </ThemeProvider>
        );
    }
};