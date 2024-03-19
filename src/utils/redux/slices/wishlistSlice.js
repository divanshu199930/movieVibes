import { createSlice } from '@reduxjs/toolkit';
import { saveWishlistToStorage } from '../../persistentStorage/wishlistMovies';
import { toggleFavoriteStatus } from '../thunks/toggleThunks';
import { fetchFavoriteMovies } from '../thunks/movieThunk';

const initialState = {
  movies: {},
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    initializeFavorites(state, action) {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
      const { movie, isFavoriting } = action.payload;

      if (movie && movie.id) {
        if (isFavoriting) {
          state.movies[movie.id] = movie; 
        } else {
          delete state.movies[movie.id]; 
        }

        saveWishlistToStorage(state.movies);
      }
    }).addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
      action.payload.forEach(movie => {
        state.movies[movie.id] = movie;
      });
    });
  },
});

export const { initializeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
