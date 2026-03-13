import { View, Text } from 'react-native'
import React from 'react'
import Flower from '../../../../assets/svgs/Flower'
import Animated from 'react-native-reanimated'
import MyColors from '../../../constants/MyColors'

const MyCutieFlower = ({flowerAnimationStyle}) => {

  return (
    <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

        <View>
        <Animated.View style={[flowerAnimationStyle, {width:1, height:320, backgroundColor:'white', position:'absolute', top:-50}]} >
            <View style={{ height:50, width:50, backgroundColor:MyColors.LIGHT_PRIMARY, position:'absolute', top:0, right:-24.5}}>
                <Flower height={50} width={50} />
            </View>
        </Animated.View>
      </View>
    </View>
  )
}

export default MyCutieFlower