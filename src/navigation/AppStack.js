import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationStrings from '../constants/NavigationStrings'

import HomeTabs from './HomeStack'
import MovieDetail from '../screens/MovieDetail/MovieDetail'

export default function  (Stack)  {
    // useWishlistHandler()
 
return (
    <>
    <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.MOVIE_DETAIL} component={MovieDetail} options={{ headerShown: false }} />

</>
  )
}

