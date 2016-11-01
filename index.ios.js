/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from 'AwesomeProject/app/App'

class AwesomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
