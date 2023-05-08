import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, NavLink } from 'react-router-dom'; 
import { fetchMovieByName } from '../services/api';
import SearchMovies from '../components/SearchMovies/SearchMovies';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  
  useEffect(() => {
    const query = searchParams.get('query') ?? ''; 
    if (!query) return;

    
    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

       
        if (results.length === 0) {
          setMovies([]); 
        } else {
          setMovies(results); 
        }
      } catch (error) {
        setMovies([]);
      }
    };
      getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query }); // записуємо query в URL
  };

  return (
    <main>
      <div>
        <h1>Movies Page</h1>

        <SearchMovies onSubmit={handleSubmit} /> 

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
             <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Movies;