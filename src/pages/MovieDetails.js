import { Suspense, useRef, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link, Route } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import MovieCard from '../components/MovieCard/MovieCard';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovieById = async (id) => {
      try {
        const selectedMovie = await fetchMovieById(id);
        setSelectedMovie(selectedMovie);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <div>
      <MovieCard movie={selectedMovie} />
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Route path="cast" element={<Cast movie={selectedMovie} />} />
        <Route path="reviews" element={<Reviews movie={selectedMovie} />} />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
