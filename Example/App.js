
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import SnapShotView from 'react-native-snapshot-view'

const screen = Dimensions.get('window')

export default class App extends Component {

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

          <SnapShotView
            shotNumber={this.state.shotNumber}
            fileName={"myImage"}
            onShoted={events => {
              console.log(" events  ----- ", events.nativeEvent.filePath);
              this.setState({
                imageUri: events.nativeEvent.filePath
              })
            }}>
            <Image source={require("./lu.jpg")} style={[styles.center, styles.comImage]}>
              <Text style={styles.text}>These are the components.</Text>
            </Image>
          </SnapShotView>

          <TouchableOpacity
            onPress={() => {
              const shotNumber = this.state.shotNumber + 1
              this.setState({
                shotNumber
              })
            }}>
            <View style={[styles.button, styles.center]}>
              <Text>start snapshot button</Text>
            </View>
          </TouchableOpacity>

          <Text>imagePath: {this.state.imageUri}</Text>

          <Image
            style={{width: 300, height: 300}}
            source={{uri: this.state.imageUri, isStatic: true}}
            resizeMode={"contain"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 30,
    backgroundColor: "#44d582",
    borderRadius: 5,
    marginTop: 10
  },
  text: {
    color: "#580169",
    fontSize: 18,
    backgroundColor: "#0000"
  },
  comImage: {
    width: screen.width,
    height: 300
  }
})
