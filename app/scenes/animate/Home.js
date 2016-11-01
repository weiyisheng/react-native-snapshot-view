import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import Button from 'AwesomeProject/app/components/Button'

export default class Home extends React.Component {

  render() {
    const { navigator } = this.props
    return (
      <Scene navigator={navigator} hideBack={true} style={{justifyContent: "center", alignItems: "center"}}>

        <Button lable={"timing"} onPress={() => {
          navigator.push({
            title: "timing",
            index: 1
          })
        }}/>

        <Button lable={"spring"} onPress={() => {
          navigator.push({
            title: "spring",
            index: 1
          })
        }}/>

        <Button lable={"pan"} onPress={() => {
          navigator.push({
            title: "pan",
            index: 1
          })
        }}/>



      </Scene>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    height: 54,
    backgroundColor: "#6F85AD"
  }
})
