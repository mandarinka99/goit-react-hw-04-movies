import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _get from "lodash/get";
import API from "../../../action/API";
import s from "./Rewievs.module.css"

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    API.fetchReviews(movieId).then(setReviews).catch(error => console.log(error));
  }, [movieId]);
  return (
    <div className={s.reviewsContainer}>
      {_get(reviews, "results.length") ? (
        <ul>
          {reviews.results.map((result) => (
            <li key={result.id} className={s.reviewsItem}>
              <h2 className={s.reviewsTitle}>Autor: {result.author}</h2>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </div>
  );
};

export default Reviews;
