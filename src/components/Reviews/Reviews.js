import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    let isMounted = true;

    const getReviews = async () => {
      try {
        const fetchedReviews = await fetchMovieByReviews(movieId);

        if (isMounted) {
          setReviews(fetchedReviews);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return (
    <div>
      <div>Reviews</div>
      {reviews.length ? (
        <ul>
          {reviews.map((review) => (
              <li key={review.id}>
                  <p>Author:{review.author }</p>
                  <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we didn't find any reviews</p>
      )}
    </div>
  );
};

export default Reviews;
