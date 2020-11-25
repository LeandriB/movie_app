import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorite'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e55d2a2d`;
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search)
      }
    }

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
      const movieFavorites = JSON.parse(
        localStorage.getItem('favorite-movies')
      );

      if (movieFavorites) {
        setFavorites(movieFavorites);
      }
    }, [])

    const saveToLocalStorage = (items) => {
      localStorage.setItem('favorite-movies', JSON.stringify(items));
    }; 

    const addMovie = (movie) => {
      const favoritesList = [...favorites, movie]
      setFavorites(favoritesList);
      saveToLocalStorage(favoritesList);
    }

    const removeMovie = (movie) => {
      const favoritesList = favorites.filter(
        (favorites) => favorites.imdbID !== movie.imdbID);

      setFavorites(favoritesList);
      saveToLocalStorage(favoritesList);
    }

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-2 mb-2'>
        <Title heading='Movies'/>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
          movies={movies} 
          handleClick={addMovie} 
          FavoriteMovies={AddFavorites}
        />
      </div>
      <div className='row d-flex align-items-center mt-2 mb-2'>
        <Title heading='Favorites'/>
      </div>
      <div className="row">
        <MovieList 
          movies={favorites} 
          handleClick={removeMovie} 
          FavoriteMovies={RemoveFavorites}
        />
      </div>
    </div>
  )
}

export default App;
