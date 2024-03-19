import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {scale, verticalScale} from '../../themes/responsiveSize';
import colors from '../../themes/colors';
import WrapperContainer from '../../components/common/WrapperContainer';
import commonStyles from '../../themes/commonStyles';

const MovieDetail = ({route}) => {
  const movieDetail = useSelector(state => state.movies.movies);
  const myMovie = movieDetail[route?.params?.movie];
  const {
    original_title,
    overview,
    release_date,
    poster_path,
    vote_average,
    genre_ids,
  } = myMovie;

  // Placeholder for genre names (Replace with actual names based on ids)
  const genres = genre_ids
    .map(id => {
      // You would replace this with a function that maps genre_ids to genre names
      return `Genre ${id}`;
    })
    .join(', ');

  return (
    <WrapperContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          style={{flex: 1, alignContent: 'center', alignItems: 'center',}}
          source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}>
          <View style={styles.posterShadow}>
            <Image
              source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
              style={styles.poster}
            />

            <Text style={styles.title}>{original_title}</Text>
            <Text style={styles.releaseDate}>Release Date: {release_date}</Text>
            {/* <View style={styles.genresContainer}>
              {genre_ids.map(id => (
                <View key={id} style={styles.genreBadge}>
                  <Text style={styles.genreText}>Genre {id}</Text>
                </View>
              ))}
            </View> */}
            <TouchableOpacity style={styles.ratingButton}>
              <Text style={styles.ratingText}>IMDB {vote_average.toFixed(1)}</Text>
            </TouchableOpacity>
           <Text style={styles.overview}>{overview}</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </WrapperContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // padding: 20,
    backgroundColor: colors.theme, // Light background color
  },
  posterShadow: {
    flex: 1,
    backgroundColor: colors.themeBackground,
    alignContent: 'center',
    alignItems: 'center',
    padding: scale(24)
  },
  poster: {
    width: scale(300),
    height: verticalScale(500),
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  title: {
    ...commonStyles.fontBold28,
    marginTop: 20,
    color: colors.FFFFFF,
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 16,
    color: '#666', // Medium text color
    marginTop: 5,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  genreBadge: {
    backgroundColor: '#007AFF', // Blue background for genre badges
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  genreText: {
    color: '#fff', // White text color
    fontSize: 14,
  },
  ratingButton: {
    backgroundColor: '#ffcc00', // Yellow background for rating
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  ratingText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overview: {
    ...commonStyles.fontSemiBold15,
    marginTop: 20,
    color: colors.FFFFFF,
    textAlign: 'justify',
    lineHeight: 24, // Increased line height for readability
  },
});

export default MovieDetail;
