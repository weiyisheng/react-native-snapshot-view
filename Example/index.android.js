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

          <SnapShotView
            shotNumber={this.state.shotNumber}
            fileName={"myImage"}
            onShoted={events => {
              console.log(" events  ----- ", events.nativeEvent.filePath);
              this.setState({
                imageUri: events.nativeEvent.filePath
              })
            }}>
            <View style={{width: 100, height: 200,
              backgroundColor: "blue", justifyContent: "center",
              alignItems: "center"}}>
              <Text>react native SnapShot</Text>
            </View>
          </SnapShotView>

          <Image
            style={{width: 600, height: 700}}
            source={{uri: this.state.imageUri, isStatic: true}}
            resizeMode={"contain"}/>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: "center",
    alignItems: "center"
  }
});

AppRegistry.registerComponent('Example', () => Example);
