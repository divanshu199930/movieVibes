import { storage } from "../constants";

export const saveWishlistToStorage = (favorites) => {
    storage.set('favorites', JSON.stringify(favorites));
  };
  
  export const loadWishlistFromStorage = () => {
    const favoritesString = storage.getString('favorites');
    return favoritesString ? JSON.parse(favoritesString) : {};
  };