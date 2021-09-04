import { useState, useEffect, Suspense, lazy } from "react";
import {
  NavLink,
  Redirect,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Spiner from "../../spiner/Spiner";
import s from "./MovieDetails.module.css";
import defaultImage from "../../../images/default-image.jpg";
import _get from "lodash/get";
import API from "../../../action/API";

const Cast = lazy(() => import("../cast/Cast.js"));
const Reviews = lazy(() => import("../reviews/Reviews.js"));

const MovieDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.fethMovieById(movieId).then(setMovie).catch(setError);
  }, [movieId]);

  const goBack = (e) => {
    if (_get(location, "state.from")) {
      history.push(location.state.from);
      return;
    }
    history.push("/");
  };

  return (
    <>
      {error && <Redirect to="/error" />}

      {movie && (
        <>
          <button type="button" onClick={goBack} className={s.goBackBtn}>
            GO BACK
          </button>
          <div>
            <div className={s.cardContainer}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : defaultImage
                }
                alt={movie.title}
                width="260"
                height="360"
              />
              <div className={s.movieDesc}>
                <h2 className={s.movieTitle}>
                  {movie.title}{" "}
                  <span>({`${movie.release_date}`.split("-")[0]})</span>{" "}
                </h2>
                <p className={s.userScore}>
                  User Score: {movie.vote_average * 10}%
                </p>
                <h3 className={s.overview}>Overview</h3>
                <p className={s.overviewDesc}>{movie.overview}</p>
                <h3 className={s.genresTitle}>Genres</h3>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.name} className={s.genre}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.additionalInfoBox}>
              <h3 className={s.additionalInfoTitle}>Additional information</h3>
              <ul className={s.movieInfo}>
                <li className={s.movieInfoItem}>
                  <NavLink
                    exact
                    to={{
                      pathname: `${url}/cast`,
                      state: { from: location.state?.from || "/" },
                    }}
                    className={s.link}
                    activeClassName={s.activeLink}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={s.movieInfoItem}>
                  <NavLink
                    exact
                    to={{
                      pathname: `${url}/reviews`,
                      state: { from: _get(location, "state.from") },
                    }}
                    className={s.link}
                    activeClassName={s.activeLink}
                  >
                    Revievs
                  </NavLink>
                </li>
              </ul>

              </div>

              <Suspense fallback={<Spiner />}>
                <Route path={`${path}/cast`}>
                  <Cast />
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
