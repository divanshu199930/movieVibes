import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { loadWatchlistFromStorage } from '../../utils/persistentStorage/watchlistMovies'
import { useDispatch } from 'react-redux'
import { fetchWatchlistMovies } from '../../utils/redux/thunks/movieThunk'
import { initializeWatchlist } from '../../utils/redux/slices/watchlistSlice'

const WatchlistHandler = () => {
const dispatch = useDispatch();
    useEffect(()=>{

        const initializeWatchlater = async () => {
            try{
                const watchlater = await loadWatchlistFromStorage()
                console.log('loading async')

                if(!watchlater || Object.keys(watchlater).length === 0){
                    dispatch(fetchWatchlistMovies())
                }
                else{
                   dispatch(initializeWatchlist(watchlater)) 
                }
            }catch(error) {
            }
        }
        initializeWatchlater()
    },[dispatch])
  return null
}

export default WatchlistHandler