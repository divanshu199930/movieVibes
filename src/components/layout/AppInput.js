import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../themes/colors'
import { moderateScale, scale } from '../../themes/responsiveSize'
import commonStyles from '../../themes/commonStyles'

const AppInput = ({placeholder}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.placeholder}/>
  )
}

export default AppInput
const styles = StyleSheet.create({

    input : {
        ...commonStyles.fontSize16,
        backgroundColor : colors.inputColor,
        borderColor : colors.inputBorder,
        borderRadius : scale(10),
        borderWidth :scale(1),
        padding: moderateScale(12),
        width : '100%'
    }
})