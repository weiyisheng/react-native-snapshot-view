import React from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import Button from 'AwesomeProject/app/components/Button'

export default class AnimationBlock extends React.Component {

   render() {

     return (
       <View style={styles.cot}>
         <View style={styles.blockBox}>
           <Animated.View style={[styles.block, this.props.animatedProps]}></Animated.View>
         </View>
         <Button onPress={() => this.props.go()} lable={"GO"}/>
         <Button onPress={() => this.props.back()} lable={"回置"}/>
       </View>
     )
   }
}

const styles = StyleSheet.create({
  cot: {
    justifyContent: "center",
    alignItems: "center"
  },
  block: {
    width: 60,
    height: 60,
    backgroundColor: "#6F85AD",
    borderRadius: 5
  },
  blockBox: {
    width: 360,
    height: 60,
    backgroundColor: "#AEE0D5",
    borderRadius: 5,
  }
})
