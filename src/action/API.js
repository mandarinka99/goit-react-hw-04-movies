
const API_KEY = "0ab8998f8a4935c66d8f184668d89e03";
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchData(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

const API = {
  fetchTrendingMovies() {
    return fetchData(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
  },

  fetchMoviesByQuery(search, page) {
    return fetchData(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}`)
  },

  fethDetailsAboutMovie(id){
    return fetchData(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
  },

  fetchCast(id){
    return fetchData(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
  },

  fetchReviews(id){
    return fetchData(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
  }
};

export default API;