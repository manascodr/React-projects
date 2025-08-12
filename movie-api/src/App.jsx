import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import './App.css'

// https://imdb.iamidiotareyoutoo.com/search?q=Spiderman
const App = () => {

  const [movies, setmovies] = useState([])

  return (
    <div className="container">
      <header className="app-header">
        <div className="brand">Movie<span className="accent">Finder</span></div>
      </header>
      <SearchBar movies={movies} setmovies={setmovies} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
