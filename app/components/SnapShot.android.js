import React from 'react'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShot extends React.Component {

  _onChange(event) {
    const { onShooted } = this.props
    if(onShooted) {
      onShooted(event)
    }
  }

  render() {
    return <RCTSnapShot {...this.props} onChange={this._onChange.bind(this)} />
  }
}

SnapShot.propTypes = {
  ...View.propTypes,
  shoot: React.PropTypes.number,
  fileName: React.PropTypes.string,
  onShooted: React.PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShot', SnapShot, {
  nativeOnly: { onChange: true}
})

export default SnapShot
