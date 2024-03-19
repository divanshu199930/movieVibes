import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPopularMovies, fetchWatchlistMovies } from '../../utils/redux/thunks/movieThunk'
import { loadPopularMoviesFromStorage } from '../../utils/persistentStorage/popularMovies'
import { initializePopularMovies } from '../../utils/redux/slices/movieSlice'

const PopularMoviesHandler = () => {
const dispatch = useDispatch();
    useEffect(()=>{
    
        const initialize = async () => {
            try{
                const popularMovies = await loadPopularMoviesFromStorage()

                if(!popularMovies || Object.keys(popularMovies).length === 0){
                   dispatch(fetchPopularMovies())
                }
                else{

                    dispatch(initializePopularMovies(popularMovies)) 
                }
            }catch(error) {
            }
        }
        initialize()
    },[dispatch])
  return null
}

export default PopularMoviesHandler