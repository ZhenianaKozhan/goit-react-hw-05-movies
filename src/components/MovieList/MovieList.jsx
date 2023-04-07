import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getQuery, getTrending } from 'services/api';

const MovieList = ({ query }) => {
  const [movieList, setMovieList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie(query) {
      const results = !query ? await getTrending() : await getQuery(query);
      setMovieList(results);
    }
    fetchMovie();
  }, [query]);

  return (
    <ul>
      {movieList?.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
