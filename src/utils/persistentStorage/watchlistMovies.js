import { storage } from "../constants";

export const saveWatchlistToStorage = (watchlist) => {
    storage.set('watchlater', JSON.stringify(watchlist));
  };
  
  export const loadWatchlistFromStorage = () => {
    const watchlaterString = storage.getString('watchlater');
    return watchlaterString ? JSON.parse(watchlaterString) : {};
  };