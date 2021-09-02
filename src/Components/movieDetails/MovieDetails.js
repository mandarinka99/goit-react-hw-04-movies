import { useState, useEffect } from "react";
import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";
import API from "../../action/API";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import s from "./MovieDetails.module.css";
import defaultImage from "../../images/default-image.jpg";

const MovieDetails = () => {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.fethMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
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
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Revievs
              </NavLink>
            </li>
          </ul>

          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
