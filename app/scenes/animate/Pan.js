import React from 'react'
import { View } from 'react-native'

import Scene from 'AwesomeProject/app/scenes/Scene'
import PanBall from 'AwesomeProject/app/components/PanBall'


const Balls = [{lable: 1, backColor: "#D0021B"},
                {lable: 2, backColor: "#F5A623"},
                {lable: 3, backColor: "#F8E71C"},
                {lable: 4, backColor: "#8B572A"},
                {lable: 5, backColor: "#7ED321"},
                {lable: 6, backColor: "#417505"},
                {lable: 7, backColor: "#9B9B9B"},
                {lable: 8, backColor: "#6D7F9F"},
                {lable: 9, backColor: "#9013FE"}]


export default class Pan extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      balls: Balls
    }
  }

  render() {

    return (
      <Scene navigator={this.props.navigator}>

        <View style={{flex: 1, flexWrap: "wrap", flexDirection: "row"}}>
          {
            Balls.map(e => {
              return <PanBall key={e.lable}
                       lable={e.lable}
                       backgroundColor={e.backColor}
                       onMove={() => {

                       }}/>
            })
          }
        </View>

      </Scene>
    )
  }
}
