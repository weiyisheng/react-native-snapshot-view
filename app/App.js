 import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Navigator } from 'react-native'

import routes from 'AwesomeProject/app/routes'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      generate: false
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'home', index: 0 }}
        renderScene={(route, navigator) => routes.renderScene(route, navigator)}
        style={{flex: 1}}
      />
    )
  }
}

export default App

const styles = StyleSheet.create({
  cot: {
    backgroundColor: "red",
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "blue",
    width: 300,
    height: 60
  }
})
