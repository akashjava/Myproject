/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './app/Login';
import InitialRouter from './InitialRouter';
const SharedPreferences = require("react-native-shared-preferences");


class App extends Component {
  // componentDidMount() {
  //   getToken();
  // }
  render() {
  // SharedPreferences.setItem("token",null);

    return (
      <InitialRouter></InitialRouter>
    );
  }
}

export default App;
 
