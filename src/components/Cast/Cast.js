import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieByCast } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const fetchedCast = await fetchMovieByCast(movieId);
        setCast(fetchedCast);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();

    return () => {
      setCast([]);
    };
  }, [movieId]);

  return (
    <div>
      <div>Cast</div>
      {cast.length ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              ) : (
                <img src="placeholder-image-url" alt="placeholder" />
              )}
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, no cast available</p>
      )}
    </div>
  );
};

export default Cast;
