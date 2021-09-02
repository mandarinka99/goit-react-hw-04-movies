import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _get from "lodash/get";
import API from "../../action/API";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(`reviews`, reviews);

  useEffect(() => {
    API.fetchReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {_get(reviews, "results.length") ? (
        <ul>
          {reviews.results.map((result) => (
            <li>
              <h2>Autor: {result.author}</h2>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </>
  );
};

export default Reviews;
