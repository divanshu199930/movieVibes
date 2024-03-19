import {createSlice} from '@reduxjs/toolkit';
import {createSession, requestToken} from '../thunks/authThunk';
import {addToFavorites, addToWatchlist} from '../thunks/movieThunk';
import {storage} from '../../constants';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    requestToken: null,
    sessionId: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isAuthAccepted: null,
    authPending: false,
    watchlistStatus: null,
    requestSession : null,
    isInternetConnected : true,
    isLoading : false
  },
  reducers: {
    setAuthPending: state => {
      state.authPending = true;
      state.isAuthAccepted = null; 
    },
    setAuthAccepted: state => {
      state.isAuthAccepted = true;
      state.authPending = false; 
      
    },
    setAuthRejected: state => {
      state.isAuthAccepted = false;
      state.authPending = false; 

    },
    resetAuthStatus: state => {
      state.isAuthAccepted = null;
      state.authPending = false; 
    },
    clearToken: state => {
      state.requestToken = null;
    },
    clearAuth: state => {
      state.isAuthenticated = null;
      state.requestToken = null;
      state.requestSession = null;
      state.sessionId = null
      storage.clearAll()
      
    },

    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setSession : (state, action) => {
        state.sessionId= action.payload
    },
    // isInternetConnected :(state,action)=>{
    //     state.isInternetConnected = action.payload
    setIsLoading : (state, action) =>{
        state.isLoading = action.payload
    }
    // }
  },

  extraReducers: builder => {
    builder
      .addCase(requestToken.pending, state => {
        state.loading = true;
        state.isLoading = true

      })
      .addCase(requestToken.fulfilled, (state, action) => {
        state.requestToken = action.payload;
        state.loading = false;
      state.isLoading = false

      })
      .addCase(requestToken.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isLoading = false

      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.sessionId = action.payload;
        storage.set('isAuthenticated', true);
        storage.set('sessionId', action.payload);
        state.isAuthenticated = true;
        state.isLoading = false

      }).addCase(createSession.pending, (state, action) => {
        
        state.isLoading =true

      }).addCase(createSession.rejected, (state, action) => {
        

      })
  },
});
export const {
  setAuthAccepted,
  setAuthRejected,
  resetAuthStatus,
  clearAuth,
  setAuth,
  setSession,
  isLoading,
//   isInternetConnected,
} = authSlice.actions;
export default authSlice.reducer;
