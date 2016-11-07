import React from 'react'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShotView extends React.Component {

  _onChange(event) {
    const { onShoted } = this.props
    if(onShoted) {
      onShoted(event)
    }
  }

  render() {
    return <RCTSnapShot {...this.props} onChange={this._onChange.bind(this)} />
  }
}

SnapShotView.propTypes = {
  ...View.propTypes,
  shotNumber: React.PropTypes.number,
  fileName: React.PropTypes.string,
  onShoted: React.PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShotView', SnapShotView, {
  nativeOnly: { onChange: true}
})

export default SnapShotView
