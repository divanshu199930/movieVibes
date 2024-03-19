import { storage } from "../constants";

export const saveGenresToStorage = (genres) => {
    storage.set('genres', JSON.stringify(genres));
  };
  
  export const loadGenresFromStorage = () => {
    const genres = storage.getString('genres');
    return genres ? JSON.parse(genres) : {};
  };