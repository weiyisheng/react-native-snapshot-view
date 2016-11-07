import React from 'react'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShotView extends React.Component {

  render() {
    return <RCTSnapShot {...this.props}/>
  }
}

SnapShotView.propTypes = {
  ...View.propTypes,
  shotNumber: React.PropTypes.number,
  fileName: React.PropTypes.string,
  onShoted: React.PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShotView', SnapShotView)

export default SnapShotView
