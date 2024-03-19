import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppButton from '../../components/layout/AppButton';
import {scale} from '../../themes/responsiveSize';
import colors from '../../themes/colors';
import ImagePath from '../../constants/ImagePath';
import Crousel from '../../components/common/Crousel';
import CrouselImages from './CrouselImages';
import NavigationStrings from '../../constants/NavigationStrings';
import WrapperContainer from '../../components/common/WrapperContainer';

const OnBoarding = ({navigation}) => {

  
  const imgUrl = [
    {
      img: ImagePath.BOARD,
      caption:
        'Embark on an endless cinematic adventure – Where every film is a new discovery.',
    },
    {
      img: ImagePath.INSIGHT,
      caption:
        "Where stories find their audience – Connect with movies in a way you've never experienced before.",
    },
    {
      img: ImagePath.TASK_COMP,
      caption:
        "Step into the spotlight of movie magic – Begin your journey through film history and beyond.",
        
    },
  ];
  const [finalIndex, setFinalIndex] = useState(true);
  const handleFinalIndex = index => {
    index === imgUrl.length - 1 && setFinalIndex(false);
  };
  return (
    <WrapperContainer>
    <ImageBackground
    source={ImagePath.MOVIES} // Adjust the path to your background image
    style={styles.backgroundImage}
  >
    <View style={styles.overlay}>
      <View style={styles.content}>
        <Crousel
          Children={CrouselImages}
          data={imgUrl}
          onIndexChanged={handleFinalIndex}
        />
      </View>
      <AppButton
        onPress={() => navigation.navigate(NavigationStrings.LOGIN)}
        buttonLabel={'Start Exploring'}
        style={{ margin: scale(24) }}
        disabled={finalIndex}
      />
    </View>
  </ImageBackground>
  </WrapperContainer>
);
};

const styles = StyleSheet.create({
backgroundImage: {
  flex: 1,
  justifyContent: "center", // Aligns children to the center
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(11, 11, 25, 0.89)',
  justifyContent: "center",
},
container: {
  flex: 1,
  backgroundColor: 'transparent', 
  justifyContent: "center",
},
content: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center", 
},
});
export default OnBoarding;
