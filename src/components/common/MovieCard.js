import React from 'react';
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

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate(NavigationStrings.MOVIE_DETAIL, {movie: movie.id});
      }}>
      <ImageBackground
        source={{uri: posterUri}}
        style={styles.poster}
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
      {!!!posterUri &&<Loader/> }
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

// <View style={styles.overlay}>
//         <Rating
//           type='star'
//           ratingCount={5}
//           imageSize={20}
//           ratingBackgroundColor='rgba(11, 11, 25, 0.9)'
//           startingValue={movie?.vote_average / 2}
//           readonly
//           style={styles.rating}
//         />
//         {/* <CircularProgress
//   value={movie?.vote_averag*10}
//   activeStrokeColor={'#2465FD'}
//   activeStrokeSecondaryColor={'#C25AFF'}
// /> */}
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={() => onAddToFavorites(movie)}
//           >
//             <Icon name="favorite-border" size={24} color="#B22222" />
//             {/* <Text style={styles.actionText}>Add to Favorites</Text> */}
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.actionButton}
//             onPress={() => onAddToWishlist(movie)}
//           >
//             <Icon name="bookmark-border" size={24} color="#1E90FF" />
//             {/* <Text style={styles.actionText}>Add to Wishlist</Text> */}
//           </TouchableOpacity>
//         <Text style={styles.title}>{movie?.title}</Text>

//       </View>
