import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

import WatchList from '../screens/WatchLish/WatchList';
import Wishlist from '../screens/WishList/Wishlist';
import NavigationStrings from '../constants/NavigationStrings';
import Home from '../screens/Home/Home';
import { MdWatchLater } from 'react-icons/md';
import { Image, StyleSheet } from 'react-native';
import ImagePath from '../constants/ImagePath';
import { scale, verticalScale } from '../themes/responsiveSize';
import colors from '../themes/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.themeBackground,
        tabBarInactiveTintColor: colors.themeTrans,
        tabBarStyle: {
          backgroundColor: '#F0F8FF', // Set your desired color here
        },}}
      
      >
    
    
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          headerShown: false,
        
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={ImagePath.POPULAR} style={{height: verticalScale(31), width : scale(31), tintColor : color, resizeMode : "contain"}}/>),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.WISH_LIST}
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={ImagePath.WISHLIST} style={{height: verticalScale(30), width : scale(30), tintColor : color, resizeMode : "contain"}}/>

          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.WATCH_LIST}
        component={WatchList}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={ImagePath.WATCHLIST} style={{height: verticalScale(26), width : scale(25), tintColor : color, resizeMode: "contain"}}/>),
        }}
      />
    </Tab.Navigator>
  );
  
}
const styles =StyleSheet.create(({

    icon : {
            
    }

  }))