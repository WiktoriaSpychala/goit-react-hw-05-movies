import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'Api/Api';
import MoviesList from 'components/MovieList';
import { Container, Form, Input, Button } from 'Pages/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputSearh = e => {
    setQuery(e.target.value);
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Enter Movie Title') || setSearchParams({});
    }
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === {}) {
      return;
    }
    getMovie(query).then(setMovies);
  }, [searchParams]);

  return (
    <Container>
      <Form onSubmit={handleInputSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleInputSearh}
          value={query}
        />

        <Button type="submit">🔎</Button>
      </Form>
      <MoviesList movies={movies} />
    </Container>
  );
};
export default Movies;