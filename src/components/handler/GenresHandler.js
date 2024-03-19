import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGenres, fetchPopularMovies, fetchWatchlistMovies } from '../../utils/redux/thunks/movieThunk'
import { loadPopularMoviesFromStorage } from '../../utils/persistentStorage/popularMovies'
import { initializeGenres, initializePopularMovies } from '../../utils/redux/slices/movieSlice'
import { loadGenresFromStorage } from '../../utils/persistentStorage/Genres'

const GenresHandler = () => {
const dispatch = useDispatch();
    useEffect(()=>{
    
        const initialize = async () => {
            try{
                const genres = await loadGenresFromStorage()

                if(!genres || Object.keys(genres).length === 0){
                   await dispatch(fetchGenres())
                }
                else{

                   await dispatch(initializeGenres(genres)) 
                }
            }catch(error) {
            }
        }
        initialize()
    },[dispatch])
  return null
}

export default GenresHandler