import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFavoriteMovies } from '../../utils/redux/thunks/movieThunk';
import { loadWishlistFromStorage } from '../../utils/persistentStorage/wishlistMovies';
import { initializeFavorites } from '../../utils/redux/slices/wishlistSlice';

export const WishlistHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeFavoritesFromStorage = async () => {
      try {
        const favorites = await loadWishlistFromStorage(); // Load from storage
        if (!favorites || Object.keys(favorites).length === 0) {
         dispatch(fetchFavoriteMovies()); 
        } else {
          dispatch(initializeFavorites(favorites)); 
       
        }
      } catch (error) {
      }
    };
  
    initializeFavoritesFromStorage();
  }, [dispatch]);

  return null; 
};