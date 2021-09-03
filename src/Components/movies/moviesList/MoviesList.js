import { Link, useLocation, useRouteMatch } from "react-router-dom";

const MoviesList = ({movies}) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  return (
    <ul>
        {movies.map(movie => (
          <li key={movie.id}>
             <Link to={{pathname: `${url}/${movie.id}`, state: {from: location}}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
  );
}

export default MoviesList;