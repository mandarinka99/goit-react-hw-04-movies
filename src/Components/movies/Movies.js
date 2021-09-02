import { useState, useEffect } from "react";
import API from "../../action/API";
import SearchBar from "./searchBar/SearchBar";
import { toast, ToastContainer } from "react-toastify";
import Spiner from "../spiner/Spiner";
import MoviesList from "./moviesList/MoviesList";
import { useHistory } from "react-router-dom";
import queryString from "query-string"

const Movies = () => {
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {

    const queryParsed = queryString.parse(history.location.search);
    if (search === null && queryParsed && queryParsed.query) {
      setSearch(queryParsed.query);
    setPage(1);
    }
    if (search === null) {
      return;
    }

    API.fetchMoviesByQuery(search, page).then((data) =>
      setMovies(data.results)
    );
  }, [page, search]);

  const handleSubmit = query => {
    setSearch(query);
    setPage(1);
    history.push(`${history.location.pathname}?query=${query}`);
  };

  return (
    <>
    <SearchBar handleSubmit={handleSubmit} /> 
    {movies && <MoviesList movies={movies}/> }



      {isLoading && <Spiner />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movies;
