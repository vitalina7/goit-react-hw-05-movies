import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const MovieList = ({trendingMovies}) => {
    return (
    <section>
            <h2>Trending today</h2>
            <ul>
                {trendingMovies.map(movie => {
                    return (
                        <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`}>
                                {movie.title}
                        </NavLink>
                            </li>
                    )
                })}
            </ul>
    </section>
)
}
export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

