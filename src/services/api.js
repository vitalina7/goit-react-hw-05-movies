const myApiKey = `e57a7460b1ed8b380c8009a285023a1d`;
const baseUrl = 'https://api.themoviedb.org';

export const fetchTrendMovies = async () => {
    const mediaType = 'movie';
    const mediaTime = 'day';
    const response=await fetch(`${baseUrl}/3/trending/${mediaType}/${mediaTime}?api_key=${myApiKey}`)
    const data = await response.json();
    return data.results;
   
}

export const fetchMovieByName = async (movieName) => {
  const language = 'en-US';
  const page = '1';
  const include_adult = 'false';
  const response = await fetch(`${baseUrl}/3/search/movie?api_key=${myApiKey}&language=${language}&query=${movieName}&page=${page}&include_adult=${include_adult}`);
  const data = await response.json();
  return data.results;
}

export const fetchMovieById = async (movieId) => {
    const language = 'en-US';
    const response = await fetch(`${baseUrl}/3/movie/${movieId}?api_key=${myApiKey}&language=${language}`);
    const data = await response.json();
    return data.results;
}

export const fetchMovieByCast = async (movieId) => {
    const language = 'en-US';
    const response = await fetch(`${baseUrl}/3/movie/${movieId}/credits/?api_key=${myApiKey}&language=${language}`);
    const data = await response.json();
    return data.results;
}

export const fetchMovieByReviews = async (movieId) => {
    const language = 'en-US';
    const page = 1;
    const response = await fetch(`${baseUrl}/3/movie/${movieId}/reviews?api_key=${myApiKey}&language=${language}`);
    const data = await response.json();
    return data.results;
}
