import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
import commonStyles from '../../themes/commonStyles';
import colors from '../../themes/colors';
import {scale, verticalScale} from '../../themes/responsiveSize';

const CrouselImages = (item, index, width) => {
  return (
    <View key={index} style={{...styles.carouselItem, width: width}}>
      {/* <Image source={item.img} style={styles.image} /> */}
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
};

export default CrouselImages;

const styles = StyleSheet.create({
  carouselItem: {
    // Full width of the carousel
    alignItems: 'center', // Center content horizontally
    // Center content vertically
    justifyContent: 'center',
  },
  image: {
    // resizeMode: 'contain',
    width: '100%', // or a specific width
    // height: '100%', // or a specific height
  },
  caption: {
    ...commonStyles.fontSemiBold16,
    color: colors.FFFFFF,
    textAlign: 'center',
    marginTop: verticalScale(32),
    marginHorizontal: scale(48),
  },
});
