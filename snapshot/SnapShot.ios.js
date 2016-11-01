import React from 'react'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShot extends React.Component {

  render() {
    return <RCTSnapShot {...this.props}/>
  }
}

SnapShot.propTypes = {
  ...View.propTypes,
  shoot: React.PropTypes.number,
  fileName: React.PropTypes.string,
  onShooted: React.PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShot', SnapShot)

export default SnapShot
