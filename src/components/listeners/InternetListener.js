import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { scale, verticalScale } from '../../themes/responsiveSize';
import colors from '../../themes/colors';
import commonStyles from '../../themes/commonStyles';
// import { isInternetConnected } from '../../utils/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const InternetListener = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch()
  const [connectionInfo, setConnectionInfo] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected && state.isInternetReachable) {
        setConnectionInfo('You are back Online!');
        setIsVisible(true);
        // dispatch(isInternetConnected(true))

        setTimeout(() => setIsVisible(false), 2000); // Hide after 3 seconds
      } else {
        setConnectionInfo('No Internet Connection :(');
        setIsVisible(true);
        // dispatch(isInternetConnected(false));
        // Consider keeping it visible until the connection is back
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    isVisible &&
        <View style={{...styles.toast,backgroundColor : connectionInfo === 'You are back Online!' ? 'green' : colors.steelGray}}>
          <Text style={styles.toastText}>{connectionInfo}</Text>
        </View>
      
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    top: verticalScale(21),
    // right : scale(60),
    width : "100%",
    // left: scale(60),
    position: "absolute",
    backgroundColor: colors.steelGray,
    
    zIndex: 213123,

    justifyContent: 'center',
    alignItems: 'center',
  },
  
  toastText: {
    ...commonStyles.fontSize11Semibold,
    color: 'white',
  },
});

export default InternetListener;
