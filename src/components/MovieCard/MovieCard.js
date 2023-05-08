import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } = movie;
  const location = useLocation();
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const releaseYear = release_date ? new Date(release_date).getFullYear() : '-';
  const userScore = vote_average ? `${vote_average * 10}%` : '-';

  return (
    <>
      <div>
        <img src={posterUrl} alt={`${title} poster`} />

        <div>
          <p>
            {title ?? 'Unknown'} ({releaseYear})
          </p>
          <p>User Score: {userScore}</p>
          <div>
            <p>Overview:</p> {overview}
          </div>
          {genres && genres.length > 0 && (
            <div>
              <p>Genres:</p>
              {genres.map(genre => genre.name).join(', ')}
            </div>
          )}
        </div>

      </div>

      <div>
        <h1>Additional information</h1>

        <ul>
          <li>
            <NavLink
              to={{ 
                pathname: `/movies/${movie.id}/cast`, 
                state: { from: location?.state?.from ?? '/' } 
              }}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to={{ 
                pathname: `/movies/${movie.id}/reviews`, 
                state: { from: location?.state?.from ?? '/' } 
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
