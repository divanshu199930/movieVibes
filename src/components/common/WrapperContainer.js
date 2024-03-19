import React from 'react';
import {View, Text, SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';
// import Loader from './Loader';
// import colors from '../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../themes/colors';
import InternetListener from '../listeners/InternetListener';
import Loader from './Loader';
import { useSelector } from 'react-redux';
// import ToastMessage from './ToastMessage';
// import OnLocationOff from '../Screens/OnLocationOff/OnLocationOff';

const WrapperContainer = ({
  children,
  isLoadingInContainer,
  statusBarColor = colors.transparent,
  bodyColor = colors?.themeBackground,
  barStyle = 'light-content',
  removeTopInset = false,
  removeBottomInset = false,
  translucent = true,
}) => {
  const insets = useSafeAreaInsets();

  const isLoading = useSelector((state) => state.auth.isLoading)
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: statusBarColor,
          paddingTop: removeTopInset ? 0 : insets.top,
          paddingBottom: removeBottomInset ? 0 : insets.bottom,
        }}>

        <StatusBar
          backgroundColor={statusBarColor}
          barStyle={barStyle}
          translucent={translucent}
        />
        <View style={{backgroundColor: bodyColor, flex: 1}}>{children}</View>
        {isLoading && 
        <ActivityIndicator color={colors.steelGray} size={'large'} style={{position: "absolute", top: 0, right :0, left : 0, bottom: 0}}/>}
        {/* <ToastMessage/> */}
        {/* <OnLocationOff/> */}
      </View>
    </>
  );
};

export default WrapperContainer;
