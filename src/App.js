/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import {PrimaryNav, LoginNav} from "./Router";

class App extends Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
        <LoginNav />
    );
  }
}
 export default App;