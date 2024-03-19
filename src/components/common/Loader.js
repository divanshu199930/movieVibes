import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../themes/colors'

const Loader = () => {
  return (
    <ActivityIndicator color={colors.steelGray} size={'large'} style={{position: "absolute", top: 0, right :0, left : 0, bottom: 0}}/>
    
  )
}

export default Loader