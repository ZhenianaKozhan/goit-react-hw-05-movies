import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {query && <MovieList query={query} />}
    </>
  );
};

export default SearchMovie;
