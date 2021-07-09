import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

const apiUri =
  "https://react-http-f53c2-default-rtdb.europe-west1.firebasedatabase.app/movies.json";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAddingMovie, setIsAddingMovie] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUri);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const movies = [];
      for (const key in data) {
        const movie = data[key];
        movies.push({
          id: key,
          title: movie.title,
          openingText: movie.openingText,
          releaseDate: movie.releaseDate
        });
      }

      setMovies(movies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  const addMovieHandler = async movie => {
    const response = await fetch(apiUri, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json"
      }
    });
    setIsAddingMovie(false);
    if (response.ok) {
      fetchMoviesHandler();
    }
  };
  const showMovieForm = () => {
    setIsAddingMovie(true);
  };

  return (
    <React.Fragment>
      <section>
        {isAddingMovie && <AddMovie onAddMovie={addMovieHandler} />}
        {!isAddingMovie && <button onClick={showMovieForm}>Add Movie</button>}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
