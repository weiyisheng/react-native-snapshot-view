import React from 'react'
import { View, Animated, Easing, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import Button from 'AwesomeProject/app/components/Button'
import AnimationBlock from 'AwesomeProject/app/components/AnimationBlock'

const {height, width} = Dimensions.get('window');
const Duration = 1500
const ToValue = width - 26 - 60

export default class Timing extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      inOut: "in",
      linearTranslateX: new Animated.Value(0),
      easeTranslateX: new Animated.Value(0),
      quadTranslateX: new Animated.Value(0),
      cubicTranslateX: new Animated.Value(0),
      polyTranslateX: new Animated.Value(0),
      sinTranslateX: new Animated.Value(0),
      circleTranslateX: new Animated.Value(0),
      expTranslateX: new Animated.Value(0),
    }
  }
  //
  // componentDidMount() {
  //   this.state.linearTranslateX.addListener((value) => {
  //     console.log(" value : ", value);
  //   })
  // }
  //
  // componentWillUnmount() {
  //   this.state.linearTranslateX.removeAllListeners()
  // }

  inOut(ease) {
    const { inOut } = this.state
    switch (inOut) {
      case "in":
        return Easing.in(ease)

      case "out":
        return Easing.out(ease)

      case "inOut":
        return Easing.inOut(ease)

      default:
        return ease
    }
  }

  start() {
    const animations = [
      Animated.timing(this.state.linearTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.linear)
      }),
      Animated.timing(this.state.easeTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.ease)
      }),
      Animated.timing(this.state.quadTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.quad)
      }),
      Animated.timing(this.state.cubicTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.cubic)
      }),
      Animated.timing(this.state.polyTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.poly(2))
      }),
      Animated.timing(this.state.sinTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.sin)
      }),
      Animated.timing(this.state.circleTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.circle)
      }),
      Animated.timing(this.state.expTranslateX, {
        toValue: ToValue,
        duration: Duration,
        easing: this.inOut(Easing.exp)
      })
    ]
    this.parallel = Animated.parallel(animations, {
      stopTogether: false
    })

    this.parallel.start()
  }

  back() {
    //this.parallel.stop()
    const animations = [
      Animated.timing(this.state.linearTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.easeTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.polyTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.quadTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.cubicTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.sinTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.circleTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.expTranslateX, {
        toValue: 0,
        duration: 0
      })
    ]
    Animated.parallel(animations, {
      stopTogether: true
    }).start()
  }

  render() {
    const { navigator } = this.props
    const { linearTranslateX, easeTranslateX, quadTranslateX, cubicTranslateX,
      polyTranslateX, sinTranslateX, circleTranslateX, expTranslateX } = this.state

    return (
      <Scene navigator={navigator} style={{paddingTop: 6}} hideBack={true}>
        <View style={styles.cot}>
          <Text style={styles.textLable}>linear</Text>
          <View style={styles.blockBox}>
            <Animated.View style={[styles.block, {transform: [{translateX: linearTranslateX}]}]}></Animated.View>
          </View>

          {
            // <Text style={styles.textLable}>ease</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: easeTranslateX}]}]}></Animated.View>
            // </View>


            // <Text style={styles.textLable}>quad</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: quadTranslateX}]}]}></Animated.View>
            // </View>
            //
            // <Text style={styles.textLable}>cubic</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: cubicTranslateX}]}]}></Animated.View>
            // </View>

            // <Text style={styles.textLable}>poly(n)</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: polyTranslateX}]}]}></Animated.View>
            // </View>
            //
            // <Text style={styles.textLable}>sin</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: sinTranslateX}]}]}></Animated.View>
            // </View>
            //
            // <Text style={styles.textLable}>circle</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: circleTranslateX}]}]}></Animated.View>
            // </View>
            //
            // <Text style={styles.textLable}>exp</Text>
            // <View style={styles.blockBox}>
            //   <Animated.View style={[styles.block, {transform: [{translateX: expTranslateX}]}]}></Animated.View>
            // </View>
          }
          <View style={styles.btnBox}>
            <TouchableOpacity onPress={() => this.start()}>
              <Text style={styles.bootomBtnText}>go</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.back()}>
              <Text style={styles.bootomBtnText}>回置</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
              <Text style={styles.bootomBtnText}>返回</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Scene>
    )
  }
}

const styles = StyleSheet.create({
  cot: {
    paddingHorizontal: 13
  },
  block: {
    width: 60,
    height: 60,
    backgroundColor: "#6F85AD",
    borderRadius: 5
  },
  blockBox: {
    marginTop: 5,
    height: 60,
    backgroundColor: "#AEE0D5",
    borderRadius: 5,
  },
  btn: {
    marginTop: 10,
    alignSelf: "center"
  },
  textLable: {
    marginTop: 7,
    fontSize: 16
  },
  bootomBtnText: {
    fontSize: 16,
    marginHorizontal: 16
  },
  btnBox: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center"
  }
})
