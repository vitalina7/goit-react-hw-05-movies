import { fetchTrendMovies } from "services/api";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList"
const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            try {
                 setLoading(true);
                const trendingMovies = await fetchTrendMovies();
                setTrendingMovies(trendingMovies);
            }
            catch(error) {
                setError(true);
            }
            finally {
                setLoading(false);
            }

        }
        getMovies();
    },[])
    return (
        <div>
            {loading ? (<div>Loading....</div>) :
                error ? (<div>Sorry, it is an error</div>) :
                    (<MovieList trendingMovies={trendingMovies } />)
                
        }
        </div>
    )
    
}
export default Home;