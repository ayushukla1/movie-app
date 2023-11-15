import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=e18531e8";

const App = () => {

  const[searchTitle, setSearchTitle] = useState(""); // [searchTitle, setSearchTitle

  const [movies, setMovies] = useState([]); // [movies, setMovies

  const searchMovies = async (title) => {
    const response = await fetch(API_URL + "&s=" + title);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);

  return (
    <div className="app">
      <h1>MovieAdda</h1>
      <div className="search">
        <input type="text" placeholder="Search for a movie" value={searchTitle} onChange={(e) => { setSearchTitle(e.target.value) }} />
        <img src={SearchIcon} alt="Search" onClick={() => { searchMovies(searchTitle) }} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) :
          (
            <div className="container">
              <h2> No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
