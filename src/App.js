import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'
import Title from './components/Title';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
      const url = "http://www.omdbapi.com/?s=star wars&apikey=e55d2a2d";
      const response = await fetch(url);
      const responseJSON = await response.json();

      console.log(responseJSON);
      setMovies(responseJSON.Search)
    }

    useEffect(() => {
      getMovieRequest();
    }, []);

  return (
    <div className="container-fluid movie-app">
      <div className='row'>
        <Title heading='Movies'/>
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  )
}

export default App;
