
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const key = '725e0882b78284b30bf514ffe956dced';

export const getTrendingMovies = async () => {
  const result = await axios.get(`${URL}trending/movie/week?api_key=${key}`);
  return result.data;
};

export const getMovie = async query => {
  const result = await axios.get(
    `${URL}search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return result.data.results;
};
export const getMovieById = async id => {
  const result = await axios.get(
    `${URL}movie/${id}?api_key=${key}&language=en-US`
  );
  return result.data;
};
export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `${URL}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return data.results;
};
export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `${URL}movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
  return data.cast;
};
