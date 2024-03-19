import { configureStore } from '@reduxjs/toolkit';
import wishlistSlice from './slices/wishlistSlice';
import authSlice from './slices/authSlice';
import movieSlice from './slices/movieSlice';
import watchlistSlice from './slices/watchlistSlice';

export const store = configureStore({
  reducer: {
    watchlist: watchlistSlice,
    wishlist: wishlistSlice,
    auth : authSlice,
    movies : movieSlice
  },
});
