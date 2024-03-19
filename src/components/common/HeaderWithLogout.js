import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from '../../themes/colors';
import commonStyles from '../../themes/commonStyles';
import { scale } from '../../themes/responsiveSize';
import { clearAuth } from '../../utils/redux/slices/authSlice';
import { storage } from '../../utils/constants';

const HeaderWithLogout = ({ title,handleActionButton, centerButton}) => {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        storage.clearAll()

        dispatch(clearAuth())
    
    
    }
  return (
    <View style={{width : '100%', padding: scale(14), justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
    <Text style={{...commonStyles.fontSemiBold23, color: colors.F1F1F2}}>{title}</Text>
    <TouchableOpacity onPress={handleActionButton} activeOpacity={0.8}>
        {centerButton &&
    <Text style={{...commonStyles.fontSemiBold13, color: colors.F1F1F2}}>{centerButton}</Text>}
    </TouchableOpacity>
<TouchableOpacity onPress={handleLogOut} activeOpacity={0.8}>
    <Text style={{...commonStyles.fontSemiBold13, color: colors.F1F1F2}}>Logout</Text>
    </TouchableOpacity>
</View>
  );
};

export default HeaderWithLogout;
