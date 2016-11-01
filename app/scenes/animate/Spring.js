import React from 'react'
import { View, Animated, Easing, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import Button from 'AwesomeProject/app/components/Button'
import AnimationBlock from 'AwesomeProject/app/components/AnimationBlock'

const {height, width} = Dimensions.get('window');
const Duration = 3000
const ToValue = width - 26 - 60
const Compare = ["friction", "tension", "all"]

export default class Timing extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      compareIndex: 0,
      defaultTranslateX: new Animated.Value(0),
      f7t80TranslateX: new Animated.Value(0),
      f7t20TranslateX: new Animated.Value(0),
      f2t40TranslateX: new Animated.Value(0),
      f12t40TranslateX: new Animated.Value(0),
    }
  }

  start() {
    const animations = [
      Animated.spring(this.state.defaultTranslateX, {
        toValue: ToValue,
        friction: 7,
        tension: 40
      }),
      Animated.spring(this.state.f7t80TranslateX, {
        toValue: ToValue,
        friction: 7,
        tension: 80
      }),
      Animated.spring(this.state.f7t20TranslateX, {
        toValue: ToValue,
        friction: 7,
        tension: 20
      }),
      Animated.spring(this.state.f2t40TranslateX, {
        toValue: ToValue,
        friction: 2,
        tension: 40,
        //overshootClamping: true
      }),
      Animated.spring(this.state.f12t40TranslateX, {
        toValue: ToValue,
        friction: 12,
        tension: 40
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
      Animated.timing(this.state.defaultTranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.f7t80TranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.f7t20TranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.f2t40TranslateX, {
        toValue: 0,
        duration: 0
      }),
      Animated.timing(this.state.f12t40TranslateX, {
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
    const { defaultTranslateX, f7t80TranslateX, f7t20TranslateX, f2t40TranslateX, f12t40TranslateX } = this.state

    return (
      <Scene navigator={navigator} style={{paddingTop: 26}} hideBack={true}>
        <View style={styles.cot}>

          {
            Compare[this.state.compareIndex] === "tension" || Compare[this.state.compareIndex] === "all" ?
              (
                <View>
                  <Text style={styles.textLable}>friction: 7, tension: 20</Text>
                  <View style={styles.blockBox}>
                    <Animated.View style={[styles.block, {transform: [{translateX: f7t20TranslateX}]}]}></Animated.View>
                  </View>

                  <Text style={styles.textLable}>friction: 7, tension: 40 (default)</Text>
                  <View style={styles.blockBox}>
                    <Animated.View style={[styles.block, {transform: [{translateX: defaultTranslateX}]}]}></Animated.View>
                  </View>

                  <Text style={styles.textLable}>friction: 7, tension: 80</Text>
                  <View style={styles.blockBox}>
                    <Animated.View style={[styles.block, {transform: [{translateX: f7t80TranslateX}]}]}></Animated.View>
                  </View>
                </View>
              ) : null
          }

          {
            Compare[this.state.compareIndex] === "friction"  || Compare[this.state.compareIndex] === "all" ?
              (
                <View>
                  <Text style={styles.textLable}>friction: 2, tension: 40</Text>
                  <View style={styles.blockBox}>
                    <Animated.View style={[styles.block, {transform: [{translateX: f2t40TranslateX}]}]}></Animated.View>
                  </View>
                  {
                    Compare[this.state.compareIndex] === "all" ? null :
                      <View>
                        <Text style={styles.textLable}>friction: 7, tension: 40 (default)</Text>
                        <View style={styles.blockBox}>
                          <Animated.View style={[styles.block, {transform: [{translateX: defaultTranslateX}]}]}></Animated.View>
                        </View>
                      </View>
                  }

                  <Text style={styles.textLable}>friction: 12, tension: 40</Text>
                  <View style={styles.blockBox}>
                    <Animated.View style={[styles.block, {transform: [{translateX: f12t40TranslateX}]}]}></Animated.View>
                  </View>
                </View>
              ) : null
          }



          <View style={styles.btnBox}>

            <TouchableOpacity onPress={() => this.start()}>
              <Text style={styles.bootomBtnText}>go</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.back()}>
              <Text style={styles.bootomBtnText}>回置</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              let index = this.state.compareIndex + 1 > 2 ? 0 : this.state.compareIndex + 1
              this.setState({
                compareIndex: index
              })
            }}>
              <Text style={styles.bootomBtnText}>{Compare[this.state.compareIndex]}</Text>
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
