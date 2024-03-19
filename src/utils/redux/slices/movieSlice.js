import { createSlice } from "@reduxjs/toolkit";
import { addRating, fetchFavoriteMovies, fetchGenres, fetchMovieDetails, fetchPopularMovies, fetchWatchlistMovies } from "../thunks/movieThunk";
import { savePopularMoviesToStorage } from "../../persistentStorage/popularMovies";
import { saveGenresToStorage } from "../../persistentStorage/Genres";

const initialState = {
    movies: {}, // Storing movies by their IDs for easy access
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    watchLaterMovies : {},
    favoriteMovies : {},
    videoId : {},
    genres : null
  };
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      initializePopularMovies(state, action)  {
        state.movies = action.payload
    },

    initializeGenres(state, action) {
      state.genres = action.payload
    }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchPopularMovies.pending, (state) => {
          state.status = 'loading';
          
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action) => {
          action.payload.forEach(movie => {
            state.movies[movie.id] = movie;
          })
          state.status = 'passed';

          savePopularMoviesToStorage(state.movies)
        })
        .addCase(fetchPopularMovies.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addRating.fulfilled, (state, action) => {
          // Handle the successful rating addition
          state.status = 'passed';

          // For example, you might want to update the rated movie's state or log success
        }).addCase(fetchGenres.fulfilled,(state,action)=>{
          state.genres=action.payload
          saveGenresToStorage(state.genres)
        })
     
       
    
    },
  });
  export const {initializePopularMovies, initializeGenres} = movieSlice.actions;
  export default movieSlice.reducer;
  