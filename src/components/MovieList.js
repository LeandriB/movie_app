import React from 'react';

const MovieList = (props) => {
    const FavoriteMovies = props.FavoriteMovies;
    return (
        <>
            {props.movies.map((movie, index)=> 
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt={movie.Title} className="rounded size"></img>
                    <div 
                        onClick={() => props.handleClick(movie)} 
                        className="overlay rounded-bottom d-flex align-items-center justify-content-center"
                    >
                        <FavoriteMovies/>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieList