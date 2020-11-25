# Movie App

## About

The goal for the application was to allow users to search through movies from a database and save their favorites to a favorite movie list. The application also stores the favorited movies in the local storage. The user also has the ability to remove the movies from the favorite movie list. 

This application was broken down into 6 distincts components:

* ```App``` - Holds Title, SearchBar, MovieList, RemoveFavorites and AddFavorites
* ```MovieList``` - Displays a collection of queried movie results and holds FavoriteMovies
* ```SearchBar``` - Shows state of user query to  books to display in MovieList
* ```Title``` - Holds the heading for each section in the application
* ```RemoveFavorite``` - Allows user to remove favorited movie from list
* ```AddFavorites``` - Displays a movie poster of the movie the user favorited

## Installation

1. Clone the directory
2. In the terminal, navigate to the root directory for this project
3. Run ```npm install``` to install all dependencies
4. Now that everything is set up, continue onto the section *How to run this program*

## How to run this program

Make sure all your dependencies are installed in your terminal or updated to the lasest version.

###### Start App

Make sure that you are in project root directory and run ```npm start``` in order to start up the app.

## Project Screenshots

![Project Preview](/img/movie_app.png)

## Credit

[Chris Blakely's](https://www.youtube.com/watch?v=jc9_Bqzy2YQ&feature=emb_logo) youtube channel for an in depth explaination of this application.

## Attributions

* Understanding React [Hooks](https://reactjs.org/docs/hooks-rules.html)
* [Icons](https://icons.getbootstrap.com/) from bootstrap
* API for Movies from [OMDB API](http://www.omdbapi.com/apikey.aspx)
* Test and document API through [Postman](https://www.postman.com/)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
