import React from 'react'
import { View, Linking, Platform } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import Button from 'AwesomeProject/app/components/Button'

export default class Communications extends React.Component {

  onPress() {
    const url = "geo:40.3676570000,116.1516590000(哈哈哈)"
    //const url = "http://cn.bing.com/?mkt=zh-CN&mkt=zh-CN"
    // Linking.canOpenURL(url).then(supported => {
    //   if (!supported) {
    //     console.log('Can\'t handle url: ' + url);
    //   } else {
    //     return Linking.openURL(url);
    //   }
    // }).catch(err => console.error('An error occurred', err));
    this.isDirectionSupported(supported => {
      console.log(" supported : ", supported);
    })

  }

  isDirectionSupported(callback) {
    let url = "geo:22.5397640000,114.0909840000"
    if(Platform.OS === "ios") {
      url = "http://maps.apple.com/?daddr=22.5397640000,114.0909840000&dirflg=d&t=m"
    }
    Linking.canOpenURL(url).then(supported => callback(supported)).catch(err => false)
  }

  render() {
    const { navigator } = this.props
    return (
      <Scene navigator={navigator} style={{justifyContent: "center", alignItems: "center"}}>
        <Button onPress={() => this.onPress()}/>
      </Scene>
    )
  }
}
