import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import API from "../../action/API";
import MovieDetails from "../movieDetails/MovieDetails";



const Home = () => {
  const { url, path } = useRouteMatch();
const [movies, setMovies] = useState(null);

useEffect(() => {
  API.fetchTrendingMovies().then(data => setMovies(data.results))
}, [])

console.log(movies)

  return (
    <>
     <h2>Tranding today</h2>
     {movies && (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
             <NavLink to={`${url}/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
     ) }

    </>
  );
}

// <hr />

// <Route path={`${path}/:authorId`}>
//   {authors && <AuthorSubView authors={authors} />}
// </Route>
// </>

export default Home;