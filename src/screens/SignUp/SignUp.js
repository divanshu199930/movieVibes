import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import {scale, verticalScale} from '../../themes/responsiveSize';
import AppInput from '../../components/layout/AppInput';
import AppButton from '../../components/layout/AppButton';
import Divider from '../../components/layout/Divider';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = () => {
  const [singUpFlow, setSignUpFlow] = useState(1);

  return (
    <ScrollView>
      <View style={styles.logoLabel}>
        <Text style={{...styles.loginFlowTxt, marginLeft: scale(24)}}>
          Hey there 👋{'\n'}How can I call you?
        </Text>
        <Image source={ImagePath.SLEEPMATE_LARGE_TILT} />
      </View>
      <Divider margin={48} />
      <View style={{padding: scale(24)}}>
        <AppInput
          placeholder={
            singUpFlow === 1 ? 'Enter your name' : 'Enter your username'
          }
        />
        {singUpFlow !== 1 && (
          <>
            <Divider margin={12} />

            <AppInput placeholder={'Enter your password'} />
          </>
        )}
        <Divider margin={24} />
        <AppButton
          buttonLabel={singUpFlow === 1 ? 'CONTINUE' : 'SIGN UP'}
          onPress={() => (singUpFlow === 1 ? setSignUpFlow(2) : null)}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
