import { useState, useEffect } from "react";
import API from "../../action/API";
import SearchBar from "./searchBar/SearchBar";
import { toast } from "react-toastify";
import MoviesList from "./moviesList/MoviesList";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

const Movies = () => {
  const history = useHistory();
  const [search, setSearch] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const queryParsed = queryString.parse(history.location.search);
    if (search === null && queryParsed && queryParsed.query) {
      setSearch(queryParsed.query);
    }
    if (search === null) {
      return;
    }

    API.fetchMoviesByQuery(search).then((data) => {
      if (search && data.results.length === 0) {
        toast.warn("No results for your query");
        return;
      }
      setMovies(data.results);
    }).catch(error => console.log(error));
    
  }, [history.location.search, search]);

  const handleSubmit = (query) => {
    setSearch(query);
    history.push(`${history.location.pathname}?query=${query}`);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
