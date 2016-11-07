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
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import SnapShotView from 'react-native-snapshot-view'
console.log(" SnapShotView : ", SnapShotView);
export default class Example extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shotNumber: 0,
      imageUri: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: 100, height: 100,
            backgroundColor: "red", marginBottom: 20}}
          onPress={() => {
            const shotNumber = this.state.shotNumber + 1
            this.setState({
              shotNumber
            })
          }}/>



          <Image
            style={{width: 100, height: 100, marginTop: 20}}
            source={{uri: this.state.imageUri}}/>
      </View>
    );
  }
}

// <SnapShotView
//   shotNumber={this.state.shotNumber}
//   fileName={"myImage"}
//   onShoted={events => {
//     console.log(" events  ----- ", events);
//   }}>
//   <View style={{width: 100, height: 300,
//     backgroundColor: "blue", justifyContent: "center",
//     alignItems: "center"}}>
//     <Text>react native SnapShot</Text>
//   </View>
// </SnapShotView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Example', () => Example);
