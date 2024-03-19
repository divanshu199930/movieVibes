import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavoriteMovies, fetchWatchlistMovies } from '../../utils/redux/thunks/movieThunk'
import MovieCard from '../../components/common/MovieCard'
import MovieCardHorizontal from '../../components/common/MovieCardHorizontal'
import { scale } from '../../themes/responsiveSize'
import WrapperContainer from '../../components/common/WrapperContainer'
import HeaderWithLogout from '../../components/common/HeaderWithLogout'
import { ListEmptyComponent } from '../../utils/constants'


const Wishlist = () => {

    const watchlistMovies = useSelector((state) => state.watchlist.movies);
    const moviesArray = Object.values(watchlistMovies)
 
   

    // console.log(favoriteMovies,' moi')
    const movieCardRender = (item)=>{
        return(
            <MovieCardHorizontal movie={item.item}
             
            />
        )
    
      }


  return (
    <WrapperContainer>
        <HeaderWithLogout title={"For later?"}/>
    <FlatList
    data={moviesArray}
    renderItem={movieCardRender}
    keyExtractor={item => item.id.toString()}
    ListEmptyComponent={ListEmptyComponent}

    />
    </WrapperContainer>
  )
}

export default Wishlist

const styles = StyleSheet.create({})