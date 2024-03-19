import { storage } from "../constants";

export const savePopularMoviesToStorage = (popularMovies) => {
    storage.set('popularMovies', JSON.stringify(popularMovies));
  };
  
  export const loadPopularMoviesFromStorage = () => {
    const popularMoviesString = storage.getString('popularMovies');
    return popularMoviesString ? JSON.parse(popularMoviesString) : {};
  };