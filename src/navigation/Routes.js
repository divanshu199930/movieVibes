import {View, Text, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './AuthenticationStack';
import AppStack from './AppStack';
import MyTheme from '../themes/Mytheme';
import {useSelector} from 'react-redux';
import {storage} from '../utils/constants';
import { createStackNavigator } from '@react-navigation/stack';
import { useWishlistHandler } from '../components/handler/WishlistHandler';
import InternetListener from '../components/listeners/InternetListener';
const Stack = createStackNavigator();

const Routes = () => {
const isAuthenticated = useSelector(state => state.auth.sessionId)
  return (

    <NavigationContainer theme={MyTheme} >
      <InternetListener />

      <Stack.Navigator >

        <>{!isAuthenticated ? AuthenticationStack(Stack) : AppStack(Stack)}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
