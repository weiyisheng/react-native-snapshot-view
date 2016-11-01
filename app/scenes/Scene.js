import React from 'react'
import { View, StyleSheet } from 'react-native'

import Button from 'AwesomeProject/app/components/Button'

export default class Scene extends React.Component {

  render() {

    return (
      <View style={[styles.cot, this.props.style]}>
        {this.props.children}
        {
          this.props.hideBack ? null :
            <Button lable={"返回"} onPress={() => this.props.navigator.pop()} style={{alignSelf: "center"}}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cot: {
    backgroundColor: "#E7EEF7",
    flex: 1
  }
})
