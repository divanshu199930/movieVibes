import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale, verticalScale} from '../../themes/responsiveSize';
import commonStyles from '../../themes/commonStyles';
import colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import ImagePath from '../../constants/ImagePath';
import Loader from './Loader';

const MovieCard = ({movie, onAddToFavorites, onAddToWatchlist, status}) => {
  const navigation = useNavigation();
  const posterUri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity
      style={styles.card}
      disabled={isLoading}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(NavigationStrings.MOVIE_DETAIL, {movie: movie.id});
      }}>
      <ImageBackground
        source={{uri: posterUri}}
        style={styles.poster}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        resizeMode="cover">
        <View
          style={{
            flex: 1,
            overflow: 'hidden',
            backgroundColor: 'rgba(11, 11, 25, 0.4)',
          }}>
          <TouchableOpacity style={{padding: scale(10)}} onPress={()=> onAddToFavorites(movie)} disabled={!posterUri}>
            <Image
              source={movie.isFavorited ? ImagePath.HEART_SELECTED : ImagePath.HEART}
              style={styles.heart}
              resizeMode="cover"></Image>
          </TouchableOpacity>
        </View> 
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            backgroundColor: colors.whiteOpacity70,
            alignItems: 'center',
            padding: scale(8),
            flexDirection: "row"
          }}
          onPress={() => onAddToWatchlist(movie)}>
          <Text style={{...commonStyles.fontBold12, color: colors.theme}}>
            Watch later
          </Text>
          <Image source={movie.isAddingToWatchlist ? ImagePath.CHECK : ImagePath.ADD} style={styles.add}/>
        </TouchableOpacity>
      </ImageBackground>
      {isLoading &&<Loader/> }
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    width: '46%',
    aspectRatio: 0.675, // Adjust based on desired width-to-height ratio
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(11, 11, 25, 0.5)', // Semi-transparent black overlay
    elevation: 3, // Shadow for Android
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    margin: scale(6),
  },
  poster: {
    flex: 1,
  },
  overlay: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },

  title: {
    ...commonStyles.fontBold21,
    color: colors.F1F1F2,
  },
  rating: {
    marginTop: 5,
  },
  actions: {
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: '#FFF',
  },
  heart: {
    height: verticalScale(28),
    width: scale(28),
    alignSelf: 'flex-end',
  },
  add: {
    height: verticalScale(18),
    width: scale(18),
    marginLeft: scale(4),
  },
});

export default MovieCard;

