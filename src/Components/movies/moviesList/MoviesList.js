import { Link, useRouteMatch } from "react-router-dom";

const MoviesList = ({movies}) => {
  const { url, path } = useRouteMatch();
  return (
    <ul>
        {movies.map(movie => (
          <li key={movie.id}>
             <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
  );
}

export default MoviesList;