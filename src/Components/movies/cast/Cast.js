import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../action/API";
import s from "./Cast.module.css"

import defaultImage from "../../../images/default-image.jpg";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.fetchCast(movieId).then(setCast).catch(error => console.log(error));
  }, [movieId]);

  return (
    <div className={s.castContainer}>
      {cast && (
        <ul>
          {cast.cast.map((actor) => (
            <li key={actor.id} className={s.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImage
                }
                alt={actor.name}
                width="120"
                height="160"
                className={s.castImg}
              />
              <p className={s.actorName}>{actor.name}</p>
              <p className={s.actorCharacter}>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
