import { createSlice } from '@reduxjs/toolkit';
import { addToWatchlist, fetchWatchlistMovies } from '../thunks/movieThunk'; // Adjust the import path
import { saveWatchlistToStorage } from '../../persistentStorage/watchlistMovies';
import { toggleWatchlistStatus } from '../thunks/toggleThunks';

const initialState = {
  movies: {},
};

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    initializeWatchlist(state, action)  {
      state.movies = action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleWatchlistStatus.fulfilled, (state, action) => {
        const { movie, isAddingToWatchlist } = action.payload;
  
        if (movie && movie.id) {
          if (isAddingToWatchlist) {
            state.movies[movie.id] = movie; 
          } else {
            delete state.movies[movie.id]; 
          }
          saveWatchlistToStorage(state.movies)
        }

      }).addCase(fetchWatchlistMovies.fulfilled, (state, action) => {
        action.payload.forEach(movie => {
          state.movies[movie.id] = movie;
        });
      })
      // Handle other cases, such as pending or rejected, if necessary
  },
});
export const {initializeWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;