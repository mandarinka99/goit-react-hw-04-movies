import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../../action/API";
import s from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.fetchTrendingMovies().then(data => setMovies(data.results)).catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2 className={s.homeTitle}>Tranding today</h2>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} >
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.homeLink}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
