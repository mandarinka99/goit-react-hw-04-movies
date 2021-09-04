import { Link, useLocation, useRouteMatch } from "react-router-dom";
import s from "./MoviesList.module.css"

const MoviesList = ({movies}) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  return (
    <div className={s.listContainer}>
    <ul>
        {movies.map(movie => (
          <li key={movie.id} className={s.listItem}>
             <Link className={s.listItem} to={{pathname: `${url}/${movie.id}`, state: {from: location}}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default MoviesList;