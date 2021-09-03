import { useState, useEffect, Suspense } from "react";
import { NavLink, Redirect, Route, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
// import API from "../../../action/API";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import s from "./MovieDetails.module.css";
import defaultImage from "../../../images/default-image.jpg";
import _get from "lodash/get";
import API from "../../../action/API";

const MovieDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.fethMovieById(movieId).then(setMovie).catch(setError)
  }, [movieId]);

  const goBack = e => {
    if (_get(location, "state.from")) {
      history.push(location.state.from)
      return;
    }
    history.push('/')
  }
  
  return (
    <>
    {error && <Redirect to="/error"/>}
    
      {movie && (
        <>
        <button type="button" onClick={goBack}>GO BACK</button>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
          <h2>
            {movie.title} <span>({`${movie.release_date}`.split("-")[0]})</span>{" "}
          </h2>
          <p>User Score: {Math.floor(movie.popularity)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Ganres</h3>
          <ul>
            {movie.genres.map((ganre) => (
              <li key={ganre.name}>{ganre.name}</li>
            ))}
          </ul>
          <ul>
            <li>
              <NavLink
                exact
                to={{pathname: `${url}/cast`, state: {from: location.state?.from || '/'}}}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={{pathname: `${url}/reviews`, state: {from: _get(location, "state.from")}}}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Revievs
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<div></div>}>
          <Route path={`${path}/cast`}>
            <Cast/>
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
          </Suspense>
        </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
