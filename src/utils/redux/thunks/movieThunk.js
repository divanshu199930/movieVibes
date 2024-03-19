import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import constants from '../../constants';
import { Alert } from 'react-native';


const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${constants.AUTHORIZATION}`
};



export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async (filters={}, { getState, rejectWithValue }) => {
  // Destructure the filters object to get individual filter parameters, including genres
  const { voteAverageGte, region, genres } = filters;
  try {
    // Start constructing the URL with the base path and essential query parameters
    let url = `${constants.BASE_URL}/discover/movie?language=en-US&api_key=${constants.API_KEY}`;

    // Append the vote average filter if provided
    if (voteAverageGte) {
      url += `&vote_average.gte=${voteAverageGte}`;
    }

    // Append the region filter if provided
    if (region) {
      url += `&region=${region}`;
    }

    // Append the genre filter if provided. Genre IDs should be concatenated by commas
    if (genres && genres.length > 0) {
      const genreIds = genres.join(',');
      url += `&with_genres=${genreIds}`;
    }

    // Make the API call with the constructed URL and headers
    const response = await axios.get(url, { headers: headers });
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});






export const addRating = createAsyncThunk(
  'movies/addRating',
  async ({ movieId, rating }, { getState, rejectWithValue }) => {
    const { sessionId } = getState().auth; // Ensure you have a way to access the sessionId in your state
    if (!sessionId) {
      return rejectWithValue('Session ID is missing');
    }
    
    const url = `${constants.BASE_URL}/movie/${movieId}/rating?api_key=${constants.API_KEY}&session_id=${sessionId}`;
    try {
    const response = await axios.post(url, {
        value: rating, // The rating value; TMDb expects this to be between 0.5 and 10
      }, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      });
      return response.data; // Assuming the API returns some data indicating success
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchWatchlistMovies = createAsyncThunk(
  'movies/fetchWatchlistMovies',
  async (_, { getState, rejectWithValue }) => {
    const { sessionId } = getState().auth; // Replace `.auth` with the correct path to your sessionId in the Redux state
    if (!sessionId) {
      return rejectWithValue('Session ID is missing');
    }
    const url = `${constants.BASE_URL}/account/me/watchlist/movies?api_key=${constants.API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc`;
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${constants.READ_ACCESS_TOKEN}`
        }
      });

      return response.data.results; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)


export const fetchFavoriteMovies = createAsyncThunk(
  'movies/fetchFavoriteMovies',
  async (_, { getState, rejectWithValue }) => {
    const { sessionId } = getState().auth; // Replace `.auth` with the correct path to your sessionId in the Redux state
    if (!sessionId) {

      return rejectWithValue('Session ID is missing');
    }
    
    const url = `${constants.BASE_URL}/account/me/favorite/movies?api_key=${constants.API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.asc`;
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${constants.API_KEY}` // Replace with your actual read access token if needed
        }
      });
      return response.data.results; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

export const fetchTrailerKey = async (movieId) =>{
  const options = {
    method: 'GET',
    url: `${constants.BASE_URL}/movie/${movieId}/videos`,
    params: {language: 'en-US'},
    headers: headers
  };
  try {
    const response = await axios.request(options);
    const trailerKey = response.data.results.find(video => video.type === 'Trailer')?.key;
    return trailerKey 
  } catch (error) {
    return null;
  }
}

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async (_, { rejectWithValue }) => {
  try {
    // Construct the URL to fetch genres. Make sure to include your API key in the query.
    const url = `${constants.BASE_URL}/genre/movie/list?language=en-US&api_key=${constants.API_KEY}`;
    const response = await axios.get(url, { headers: headers });

    // The list of genres is usually found in the `genres` field of the response data
    return response.data.genres;
  } catch (error) {
    // Handle the error by rejecting the value with the error's response data
    return rejectWithValue(error.response.data);
  }
});



