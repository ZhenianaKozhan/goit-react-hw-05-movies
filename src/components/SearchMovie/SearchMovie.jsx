import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { Input } from './SearchMovie.styled';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div style={{ padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {query && <MovieList query={query} />}
    </div>
  );
};

export default SearchMovie;
