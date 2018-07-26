import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Colors } from '@theme';
import {
  COLOR,
  ThemeProvider,
  Icon,
  Searchable,
} from 'react-native-material-ui';

const uiTheme = {
  palette: {
    primaryColor: Colors.greenColor,
    secondaryColor: Colors.lightGrayColor,
    accentColor: Colors.darkGrayColor,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
  marginTop: 50,
};

export default class AppTheme extends Component {
  render() {
    return this.props.children;
    // return (
    //   <ThemeProvider uiTheme={uiTheme}>
    //      <View>{this.props.children}</View>
    //   </ThemeProvider>
    // );
  }
}

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    statusBarColor = this.props.statusBarColor;

    if (!statusBarColor || statusBarColor == null) {
      statusBarColor = 'transparent';
    }
  }

  render() {
    return (
      //   <ThemeProvider uiTheme={uiTheme}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          paddingTop: 0,
          backgroundColor: Colors.statusBarColor,
        }}
      >
        {this.props.children}
      </View>
      //   </ThemeProvider>
    );
  }
}
