import React from 'react'
import { View, Animated } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import Button from 'AwesomeProject/app/components/Button'
import AnimationBlock from 'AwesomeProject/app/components/AnimationBlock'

export default class Decay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      translateX: new Animated.Value(0)
    }
  }

  getDecayAnimation() {
    return Animated.decay(this.state.translateX, {
      fromValue: 100,
      velocity: {x: 34, y: 23}
    })
  }

  render() {
    const { navigator } = this.props
    const { translateX } = this.state

    return (
      <Scene navigator={navigator}>
        <AnimationBlock animation={this.getDecayAnimation()} animatedProps={{transform: [{translateX}]}}/>
      </Scene>
    )
  }
}
