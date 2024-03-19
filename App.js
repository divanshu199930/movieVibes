import { View, Text, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Routes from './src/navigation/Routes'
import { Provider, useDispatch } from 'react-redux'
import { store } from './src/utils/redux/store'
import DeepLinkHandler from './src/components/common/DeepLinkHandler'
import AuthStateListener from './src/components/listeners/AuthStateListener'
import { WishlistHandler } from './src/components/handler/WishlistHandler'
import WatchlistHandler from './src/components/handler/WatchlistHandler'
import PopularMoviesHandler from './src/components/handler/PopularMoviesHandler'
import MainHandler from './src/components/handler/MainHandler'
import Config from 'react-native-config'

const App = () => {
  return (
    <Provider store={store}>
   <SafeAreaProvider>
    <DeepLinkHandler/>
    <AuthStateListener/>

    <MainHandler/>
    <Routes/>
   </SafeAreaProvider>
   </Provider>
  )
}

export default App