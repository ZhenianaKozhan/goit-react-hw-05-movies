import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Input } from './SearchMovie.styled';
import { useEffect, useState } from 'react';
import { getQuery } from 'services/api';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movieList, setMovieList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchSearchMovie(query) {
      const results = await getQuery(query);
      setMovieList(results);
    }
    fetchSearchMovie(query);
  }, [query]);

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
      <ul>
        {movieList?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovie;
