import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavoriteMovies } from '../../utils/redux/thunks/movieThunk'
import MovieCard from '../../components/common/MovieCard'
import MovieCardHorizontal from '../../components/common/MovieCardHorizontal'
import HeaderWithLogout from '../../components/common/HeaderWithLogout'
import WrapperContainer from '../../components/common/WrapperContainer'
import commonStyles from '../../themes/commonStyles'
import colors from '../../themes/colors'
import { ListEmptyComponent } from '../../utils/constants'


const Wishlist = () => {
    const dispatch = useDispatch()
    
    const wishlistMovies = useSelector(state => state.wishlist.movies);
    const moviesArray = Object.values(wishlistMovies);
    const movieCardRender = (item)=>{
        return(
            <MovieCardHorizontal movie={item.item}
                // onAddToWishlist={addToWishlist}
                // onAddToFavorites={addToFav}
                // addRatings={addRatingToMovie}
            />
        )
    
      }

      
  return (
    <WrapperContainer>
        
        
        <HeaderWithLogout title={'Your Wishy Wishlist.'}/>

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