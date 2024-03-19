import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStrings from '../constants/NavigationStrings'
import OnBoarding from '../screens/OnBoarding/OnBoarding'
import Login from '../screens/Login/Login'
import AppHeader from '../components/common/AppHeader'
import SignUp from '../screens/SignUp/SignUp'
import Home from '../screens/Home/Home'

export default function  (Stack)  {
  
    const screens = [{id : 1,name : NavigationStrings.ON_BOARDING, component : OnBoarding, headerShown : false},
        {id : 2,name : NavigationStrings.LOGIN, component : Login,headerShown : false},
        // {id : 2,name : NavigationStrings.HOME, component : Home,headerShown : false},

        {id : 3,name : NavigationStrings.SIGNUP, component : SignUp,headerShown : true},

    ]
    
  return (
    <>
    {screens.map((item, index)=> (
        <Stack.Screen key={item.id} name={item?.name} component={item?.component} 
        options={{header : () => <AppHeader label={item.name}/>,headerShown : item.headerShown}}
        
        
        />
    ))}
</>
  )
}

