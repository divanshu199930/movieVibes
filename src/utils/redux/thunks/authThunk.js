import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Linking } from 'react-native';
import constants from '../../constants';

const API_KEY = constants.API_KEY;
const BASE_URL = constants.BASE_URL;

// Async thunk for requesting a token
export const requestToken = createAsyncThunk('auth/requestToken', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/authentication/token/new?api_key=${API_KEY}`);
    const authUrl = `https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=movieapp://auth`;

    Linking.openURL(authUrl)
        return response.data.request_token;

  } catch (error) {
    return rejectWithValue(error.response.data);
    
  }
});

export const createSession = createAsyncThunk('auth/createSession', async (requestToken, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/authentication/session/new?api_key=${API_KEY}`, {
      request_token: requestToken,
      
    })
    return response.data.session_id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});