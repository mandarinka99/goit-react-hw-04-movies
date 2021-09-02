import { useState, useEffect } from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import API from "../../action/API";
import Movie from "../movie/Movie";



const Home = () => {
  const { url, path } = useRouteMatch();
const [trandingMovies, setTrandingMovies] = useState(null);

useEffect(() => {
  API.fetchTrendingMovies().then(setTrandingMovies)
}, [])

console.log(trandingMovies)

  return (
    <>
     <h2>Tranding today</h2>
     {trandingMovies && (
      <ul>
        {trandingMovies.results.map(movie => (
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
