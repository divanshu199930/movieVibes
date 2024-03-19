import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from '../../themes/responsiveSize';
import commonStyles from '../../themes/commonStyles';
import colors from '../../themes/colors';

const AppButton = ({buttonLabel, style, disabled = false, onPress}) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? {...styles.disabledContainer, ...style}
          : {...styles.container, ...style}
      }
      onPress={onPress}
      activeOpacity={0.965}
      disabled={disabled}>
      <Text style={styles.label}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadowStyle,
    padding: scale(14),
    backgroundColor: colors.FFFFFF,
    borderRadius: scale(14),
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: colors.lightBlack,
    // width: "100%",
  },
  disabledContainer: {
    ...commonStyles.shadowStyle,
    padding: scale(14),
    backgroundColor: colors.whiteOpacity70,
    borderRadius: scale(14),
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: colors.lightBlack,
    // width: "100%",
  },
  label: {
    ...commonStyles.fontSemiBold16,
    color: colors.fontColor,
  },
});

export default AppButton;
