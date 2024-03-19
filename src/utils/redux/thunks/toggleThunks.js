import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import constants from '../../constants';

export const toggleWatchlistStatus = createAsyncThunk(
    'watchlist/toggleWatchlistStatus',
    async ({ movieId, movieDetails, isAddingToWatchlist }, { getState }) => {

      const { sessionId } = getState().auth;
      const response = await axios.post(
      `${constants.BASE_URL}/account/me/watchlist`,
    
        {
          media_type: 'movie',
          media_id: movieId,
          watchlist: isAddingToWatchlist,
        },
        { params: { api_key: constants.API_KEY, session_id: sessionId } }
      );
      return { response: response.data, movie: movieDetails, isAddingToWatchlist };
    }
  );
  

  export const toggleFavoriteStatus = createAsyncThunk(
    'wishlist/toggleFavoriteStatus',
    async ({ movieId, movieDetails, isFavoriting }, { getState }) => {
      const { sessionId } = getState().auth;
      const response = await axios.post(
        `${constants.BASE_URL}/account/me/favorite`,
        {
          media_type: 'movie',
          media_id: movieId,
          favorite: isFavoriting, // Dynamically set based on action
        },
        { params: { api_key: constants.API_KEY, session_id: sessionId } }
      );
      
      // Include isFavoriting to indicate the action taken
      return { response: response.data, movie: movieDetails, isFavoriting };
    }
  );
