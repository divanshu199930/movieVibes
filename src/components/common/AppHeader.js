import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
import { scale, verticalScale } from '../../themes/responsiveSize';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../themes/commonStyles';

const AppHeader = ({ label }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        activeOpacity={0.9} 
        onPress={() => navigation.goBack()}
      >
        <Image source={ImagePath.BACK} />
      </TouchableOpacity>
      <Text style={styles.labelTxt}>{label}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    padding: scale(24),
    // backgroundColor: 'red'

  },
  labelTxt: {
    ...commonStyles.fontSemiBold15,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute', // Position the back button absolutely
  
    top : verticalScale(17),
    left : scale(12),
    padding: scale(10), // Optional, for easier touch
  },
});