import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../action/API";

import defaultImage from "../../../images/default-image.jpg";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.fetchCast(movieId).then(setCast).catch(error => console.log(error));
  }, [movieId]);
  console.log(`cast`, cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImage
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
