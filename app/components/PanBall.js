import React from 'react'
import { View, Animated, StyleSheet, PanResponder, Text } from 'react-native'

export default class PanBall extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY()
    }
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x, // x,y are Animated.Value
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: () => {
        Animated.spring(
          this.state.pan,         // Auto-multiplexed
          {toValue: {x: 0, y: 0}} // Back to zero
        ).start();
      },
    });
  }

  render() {
    return (
      <TouchableOpacity
        onLongPress={() => {}}
        style={[this.props.style, styles.ball,
          {backgroundColor: this.props.backgroundColor || "#E6A539"}]}>
        <Text style={styles.lable}>{this.props.lable}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  ball: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 13
  },
  lable: {
    color: "#fff",
    fontSize: 15
  }
})
