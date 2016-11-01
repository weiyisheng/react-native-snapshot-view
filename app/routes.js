import React from 'react'
import { View } from 'react-native'
import Home from 'AwesomeProject/app/scenes/Home'
import AnimateHome from 'AwesomeProject/app/scenes/animate/Home'
import Decay from 'AwesomeProject/app/scenes/animate/Decay'
import Timing from 'AwesomeProject/app/scenes/animate/Timing'
import Spring from 'AwesomeProject/app/scenes/animate/Spring'
import Pan from 'AwesomeProject/app/scenes/animate/Pan'

console.log(" Home : ", Home);

import Communications from "AwesomeProject/app/scenes/Communications"

export default {
  renderScene: function(route, navigator) {
    switch (route.title) {
      case "home":
        return <Home navigator={navigator}/>

      case "animateHome":
        return <AnimateHome navigator={navigator}/>

      case "decay":
        return <Decay navigator={navigator}/>

      case "timing":
        return <Timing navigator={navigator}/>

      case "spring":
        return <Spring navigator={navigator}/>

      case "pan":
        return <Pan navigator={navigator}/>

      case "communications":
        return <Communications navigator={navigator}/>

      default:
        return <Home navigator={navigator}/>
    }
  }
}
