import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class Button extends React.Component {

  render() {

    const { lable, onPress, style } = this.props

    return (
      <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
        <Text style={styles.lable}>{lable}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 180,
    height: 48,
    backgroundColor: "#6F85AD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  lable: {
    fontSize: 18,
    color: "#fff"
  }
})
