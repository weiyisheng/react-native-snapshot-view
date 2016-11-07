import React from 'react'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShot extends React.Component {

  render() {
    return <RCTSnapShot {...this.props}/>
  }
}

SnapShot.propTypes = {
  ...View.propTypes,
  shotNumber: React.PropTypes.number,
  fileName: React.PropTypes.string,
  onShoted: React.PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShotView', SnapShot)

export default SnapShot
