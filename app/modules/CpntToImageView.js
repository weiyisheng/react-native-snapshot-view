import React from 'react'
import { View, requireNativeComponent } from 'react-native'


class CpntToImageView extends React.Component {

  render() {
    return <RCTCpntToImage {...this.props} />
  }
}

CpntToImageView.propTypes = {
  ...View.propTypes,
  generate: React.PropTypes.bool
}

const RCTCpntToImage = requireNativeComponent("RNCptToImageManagerSwift", CpntToImageView)


export default CpntToImageView
