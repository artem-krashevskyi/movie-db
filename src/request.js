const API_KEY = 'b2ddc5ecb8cf54b46f8a3c0cf8a3b621';

const baseUrl = 'https://api.themoviedb.org/3//';

export const imgUrl= 'https://image.tmdb.org/t/p/original//';

const requests = {
  fetchTrending: `${baseUrl}trending/movie/week?api_key=${API_KEY}`,
  fetchPopular: `${baseUrl}movie/popular?api_key=${API_KEY}`,
  fetchTopRated: `${baseUrl}movie/top_rated?api_key=${API_KEY}`  
};
export default requests;