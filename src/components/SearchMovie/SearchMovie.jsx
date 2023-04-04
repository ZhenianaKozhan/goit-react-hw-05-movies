import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const searchURL = '/search/movie';

export const SearchMovie = () => {
  const [searchList, isSearchList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    async function fetchMovie() {
      const { results } = await MovieAPI(searchURL, query);
      isSearchList(results);
    }
    fetchMovie();
  }, [query]);

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
      <ul>
        {searchList?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
