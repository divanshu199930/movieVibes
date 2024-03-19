import React from 'react'
import PopularMoviesHandler from './PopularMoviesHandler'
import WatchlistHandler from './WatchlistHandler'
import { WishlistHandler } from './WishlistHandler'
import { useSelector } from 'react-redux'
import GenresHandler from './GenresHandler'

function MainHandler() {
    const session_id = useSelector((state) => state.auth.sessionId)
  return (
    session_id &&
    <>
    <PopularMoviesHandler/>
    <WatchlistHandler/>
    <WishlistHandler/>
    <GenresHandler/>
    </>
  )
}

export default MainHandler