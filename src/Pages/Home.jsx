import { getTrendingMovies } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(result => {
      setMovies(result.results);
    });
  }, []);
  return (
    <div state={{ from: location }}>
      <h2>Trending movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;