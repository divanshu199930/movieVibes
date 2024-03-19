import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Children, useRef, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {scale, verticalScale} from '../../themes/responsiveSize';
import colors from '../../themes/colors';

const Crousel = ({data, Children, onIndexChanged}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = Dimensions.get('window');
  const scrollViewRef = useRef();
  const handleScroll = event => {
    const contentOffSetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffSetX / width);
    if (currentIndex !== activeIndex) {
        setActiveIndex(currentIndex);
        if (onIndexChanged) {
          onIndexChanged(currentIndex);
        }
      }
  };

  const onIndicatorClick = index => {
    scrollViewRef.current.scrollTo({
      x:
        width *
        index,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={scrollViewRef}
        onScroll={handleScroll}
        >
        {data?.map((item, index) => {
          return Children(item, index, width);
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
      {data?.map((item, index) => (

        <TouchableOpacity
          onPress={() => onIndicatorClick(index)}
          key={index}
          activeOpacity={0.7}

          style={{
            ...styles.indicator,
        
            backgroundColor:
              index === activeIndex
                ? colors.activeIndicator
                : colors.inActiveIndicator,
          }}
        />
      ))}
      </View>
    </View>
  );
};

export default Crousel;

const styles = StyleSheet.create({
    container : { alignItems :"center", alignContent: "center", height : '95%', },
  indicator: {
    height: verticalScale(8),
    width: scale(8),
    borderRadius: scale(4),
    marginStart : 0,
    marginRight: scale(6)
  },
  indicatorContainer : {
    flexDirection: 'row'
  }
});
