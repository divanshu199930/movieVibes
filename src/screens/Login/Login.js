import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import ImagePath from '../../constants/ImagePath';
import AppInput from '../../components/layout/AppInput';
import styles from './styles';
import AppButton from '../../components/layout/AppButton';
import colors from '../../themes/colors';
import Divider from '../../components/layout/Divider';
import NavigationStrings from '../../constants/NavigationStrings';
import { useDispatch, useSelector } from 'react-redux';
import { createSession, requestToken } from '../../utils/redux/thunks/authThunk';
import { storage } from '../../utils/constants';
import Loader from '../../components/common/Loader';
import WrapperContainer from '../../components/common/WrapperContainer';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const isAuthAccepted = useSelector((state) => state.auth.isAuthAccepted);
  const token = useSelector(state => state.auth.requestToken);
  const session_id = useSelector(state => state.auth.sessionId);

  const handlePress = useCallback(async () => {
    // Just dispatch the requestToken action
    await dispatch(requestToken());
  }, [token]);
  return (
    <WrapperContainer>
    <View style={styles.container}>
      
<Text style={styles.loginFlowTxt}>Movie Vibes.</Text>
<Divider margin={24} />

      <Image source={ImagePath.SLEEPMATE} />
      <Divider margin={72} />
     

      <View style={styles.fullWidth}>
        <TouchableOpacity style={styles.flexStart} activeOpacity={0.9}>
        </TouchableOpacity>
      </View>
      <Divider margin={24} />

      <AppButton buttonLabel={'LOGIN WITH TMDB'} onPress={handlePress} disabled={loading} style={{width : '100%'}}/>
      <Divider margin={3} />
    {/* {loading && <Loader/>} */}
     
    </View>
    </WrapperContainer>
  );
};

export default Login;
