import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addRating,
    addToFavorites,
    addToWatchlist,
  fetchMovieDetails,
  fetchPopularMovies,
} from '../../utils/redux/thunks/movieThunk';
import {useFocusEffect} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import MovieCard from '../../components/common/MovieCard';
import { storage } from '../../utils/constants';
import { clearAuth } from '../../utils/redux/slices/authSlice';
import colors from '../../themes/colors';
import { scale } from '../../themes/responsiveSize';
import commonStyles from '../../themes/commonStyles';
import WrapperContainer from '../../components/common/WrapperContainer';
import HeaderWithLogout from '../../components/common/HeaderWithLogout';
import { toggleFavoriteStatus, toggleWatchlistStatus } from '../../utils/redux/thunks/toggleThunks';
import FilterPopup from '../../components/common/FilterPopup';
import Loader from '../../components/common/Loader';

const Home = () => {
  const filterRef = useRef(null)

  const dispatch = useDispatch();

    const {movies, status} = useSelector(state=> state.movies)

    const moviesArray = Object.values(movies)

    const wishlist = useSelector(state => state.wishlist.movies);
    const watchlist =useSelector(state => state.watchlist.movies)

    const moviesWithFavorites = moviesArray.map(movie => ({
      ...movie,
      isFavorited: !!wishlist[movie.id],
      isAddingToWatchlist : !!watchlist[movie.id]
    }));

  const toggleWatch = (movie) => {
    const isAddingToWatchlist = !movie.isAddingToWatchlist
    dispatch(toggleWatchlistStatus({ movieId: movie.id, movieDetails: movie, isAddingToWatchlist }))
  }
  const toggleFavorite = (movie) => {
    const isFavoriting = !movie.isFavorited;
    dispatch(toggleFavoriteStatus({ movieId: movie.id, movieDetails: movie, isFavoriting }));
  };
  
  const addRatingToMovie = (movie, rate) => {
    dispatch(addRating({movieId : movie?.id, rating : rate}))
  }
  const movieCardRender = (item)=>{
    
    return(
        <MovieCard movie={item.item}
            onAddToFavorites={toggleFavorite}
            onAddToWatchlist={toggleWatch}
            addRatings={addRatingToMovie}
            status={status}
        />
    )

  }
  const handleClick = (event) => {
    filterRef.current.onOpen()
    // Simulating an asynchronous operation (e.g., a network request)

  };


  const [filterPopup, setFilterPopup] = useState();
  return (
    <WrapperContainer>
        <HeaderWithLogout title={'Popular ones.'}handleActionButton={handleClick} centerButton={'Filter'}/>
        <FilterPopup  ref={filterRef}/>
    <FlatList
    data={moviesWithFavorites}
    renderItem={movieCardRender}
    numColumns={2} // Display two items per row
    columnWrapperStyle={styles.row} // Additional styling for row
    contentContainerStyle={styles.container}
    keyExtractor={item => item.id.toString()}
    scrollEnabled
  />
  {status === 'loading' && <Loader/>}
  </WrapperContainer>
);}


const styles = StyleSheet.create({
container: {
  paddingHorizontal: 5, // Adjust padding as needed
},
row: {
  flex: 1,
  justifyContent: "space-around", // This will space your items evenly
}
});

export default Home;