import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'
import Title from './components/Title';
import SearchBar from './components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);
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

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Title heading='Movies'/>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  )
}

export default App;
