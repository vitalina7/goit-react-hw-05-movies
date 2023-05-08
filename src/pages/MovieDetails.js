import { Suspense } from 'react'; 
import { useEffect, useState } from 'react'; 
import { useParams, Outlet, useLocation, Link } from 'react-router-dom'; 
import { fetchMovieById } from '../services/api'; 
import MovieCard from '../components/MovieCard/MovieCard';


const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});


  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <div>
        <Link to={location?.state?.from ?? '/'}>
          <button type="button">
            Go back
          </button>
        </Link>

        <MovieCard movie={selectedMovie} />

      
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDelails;
