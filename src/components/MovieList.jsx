import { Link, useLocation } from 'react-router-dom';
import { List, Item, Img } from 'components/MovieList.styled';

const PosterUrl = 'https://image.tmdb.org/t/p/w500/';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.length > 0 &&
        movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {!!movie.poster_path && (
                <Img
                  src={`${PosterUrl + movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
          </Item>
        ))}
    </List>
  );
};
export default MoviesList;